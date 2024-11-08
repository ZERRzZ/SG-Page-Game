import { useEffect, useMemo, useState } from "react"

import { Typed, TypingColor, TypingState } from "@/types/Typing"

export interface IProps {
  state: TypingState
  words: string
  changeInit: (key: string, value: any) => void
  updateWords: () => void
  startCount: () => void
  resetCount: () => void
}

export const useTyped = ({ state, words, changeInit, updateWords, startCount, resetCount }: IProps) => {

  const color: TypingColor = ['#FF0000', '#00BB00']

  const [typed, setTyped] = useState<Typed[]>([])

  const [total, setTotal] = useState(0)

  const [error, setError] = useState(0)

  const startGame = () => {
    changeInit('state', 'start')
    startCount()
  }

  const resetGame = () => {
    changeInit('state', 'init')
    updateWords()
    resetCount()
    setTyped([])
    setTotal(0)
    setError(0)
  }

  // 状态改变时重新绑定事件
  useEffect(() => {
    document.addEventListener('keyup', typing)
    return () => document.removeEventListener('keyup', typing)
  }, [typed, state])

  const favourCode = (code: string) => code.startsWith('Key') || code.startsWith('Digit') || code === 'Minus' || code === 'Space' || code === 'Enter'

  const typing = ({ code, key }: KeyboardEvent) => {
    // console.log('keyup event running...')
    if (!favourCode(code)) return
    switch (code) {
      case 'Enter':
        switch (state) {
          case 'init': startGame(); break
          case 'start':
          case 'finish': resetGame(); break
        }
        break
      default:
        if (state !== 'start') return
        setTotal(t => t + 1)
        setTyped(t => [...t, { word: words[total], isCorrect: key === words[total] }])
        key !== words[total] && setError(e => e + 1)
    }
  }

  const renderTyped = useMemo(() =>
    <>
      {
        typed.map((t, i) => (
          <span
            key={t.word + i}
            style={{
              background: t.word === ' ' ? color[Number(t.isCorrect)] : undefined,
              color: t.word === ' ' ? undefined : color[Number(t.isCorrect)]
            }}
          >
            {t.word}
          </span>
        ))
      }
      {
        words.slice(total).split('').map((w, i) => <span key={i + w}>{w}</span>)
      }
    </>, [typed])

  return { typed: renderTyped, total, error, resetGame }

}