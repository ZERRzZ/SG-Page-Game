import { useMemo } from 'react'

import { randomId } from '@/utils/randomId'
import useLocalStorage from '@/hooks/common/useLocalStorage'
import { State, TypingResult } from '@/types/specific/Typing'

interface IProps {
  count: number
  total: number
  error: number
  initCount: number
  setState: React.Dispatch<React.SetStateAction<State>>
  pauseCount: () => void
}

export const useResult = ({
  initCount,
  count,
  total,
  error,
  setState,
  pauseCount,
}: IProps) => {
  const [result, changeResult] = useLocalStorage<TypingResult[]>(
    'typingResult',
    [],
  )

  const speed = useMemo(
    () => (total / (initCount - count)) * 60 || 0,
    [total, count, initCount],
  )

  const accuracy = useMemo(() => (1 - error / total) * 100 || 0, [total, error])

  const settle = () => {
    const newResult: TypingResult = {
      id: randomId(6),
      rank: 0,
      score: Number((speed * accuracy).toFixed(0)),
      total,
      error,
      speed: `${speed.toFixed(0)} 词/分`,
      accuracy: `${accuracy.toFixed(0)}%`,
      latest: true,
    }
    const pre = result
      .filter((_, i) => i < 4)
      .map(r => ({ ...r, latest: false }))
    const cur = [...pre, newResult]
    cur.sort((a, b) => b.score - a.score)
    cur.forEach((r, i) => (r.rank = i + 1))
    changeResult(cur)
  }

  const endGame = () => {
    setState('end')
    pauseCount()
    settle()
  }

  return { result, speed, accuracy, changeResult, endGame }
}
