import { useMemo } from 'react'

import { randomId } from '@/utils'
import { useLocalStorage } from '@/hooks'
import { TypingResult } from '@/types/Typing'

interface IProps {
  count: number
  total: number
  error: number
  icount: number
  changeInit: (key: string, value: any) => void
  pauseCount: () => void
}

export const useResult = ({ icount, count, total, error, changeInit, pauseCount }: IProps) => {

  const [result, changeResult] = useLocalStorage<TypingResult[]>('typingResult', [])

  const speed = useMemo(() => (total / (icount - count) * 60) || 0, [total, count, icount])

  const accuracy = useMemo(() => ((1 - error / total) * 100) || 0, [total, error])

  const settle = () => {
    const newResult: TypingResult = {
      id: randomId(6, []),
      rank: 0,
      score: Number((speed * accuracy).toFixed(0)),
      total,
      error,
      speed: `${speed.toFixed(0)} 词/分`,
      accuracy: `${accuracy.toFixed(0)}%`,
      latest: true
    }
    const pre = result.filter((_, i) => i < 4).map(r => ({ ...r, latest: false }))
    const cur = [...pre, newResult]
    cur.sort((a, b) => b.score - a.score)
    cur.forEach((r, i) => r.rank = i + 1)
    changeResult(cur)
  }

  const endGame = () => {
    changeInit('state', 'finish')
    pauseCount()
    settle()
  }

  return { result, speed, accuracy, changeResult, endGame }

}