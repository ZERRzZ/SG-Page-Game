import { useMemo } from 'react'

import useLocalStorage from '@/hooks/common/useLocalStorage'

import { randomId } from '@/utils/randomId'
import { State, TypingResult } from '@/types/specific/Typing'

const useResult = (
  initCount: number,
  count: number,
  total: number,
  error: number,
  setState: React.Dispatch<React.SetStateAction<State>>,
  pauseCount: () => void,
) => {
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
    const cur = result
      .filter((_, i) => i < 4)
      .map(r => ({ ...r, latest: false }))
      .concat(newResult)
      .sort((a, b) => b.score - a.score)
      .map((r, i) => ({ ...r, rank: i + 1 }))
    changeResult(cur)
  }

  const endGame = () => {
    setState('end')
    pauseCount()
    settle()
  }

  return { result, speed, accuracy, changeResult, endGame }
}

export default useResult
