import { useCallback, useEffect, useMemo, useState } from "react"

import { TypingColor, TypingState } from "."

export interface TypedHook {
  state: TypingState
  words: string
  color: TypingColor
  start: () => void
  pause: () => void
  reset: () => void
}

export interface Typed {
  word: string
  style: {
    background?: string
    color?: string
  }
}

export const useTyped = ({ state, words, color, pause, start, reset }: TypedHook) => {

  const [typed, setTyped] = useState<Typed[]>([])
  const [total, setTotal] = useState(0)
  const [error, setError] = useState(0)

  useEffect(() => {
    document.addEventListener('keyup', typing)
    return () => document.removeEventListener('keyup', typing)
  }, [typed, state]) // 状态改变时重新绑定事件

  const favourCode = (code: string) => code.startsWith('Key') || code.startsWith('Digit') || code === 'Minus' || code === 'Space' || code === 'Enter'

  const typing = ({ code, key }: KeyboardEvent) => {
    console.log('keyup event running...')
    if (!favourCode(code)) return
    switch (code) {
      case 'Enter':
        switch (state) {
          case 'start': pause(); break
          case 'init':
          case 'pause': start(); break
          case 'finish': reset(); break
        }
        break
      default:
        if (state !== 'start') return
        const markColor = key === words[total] ? color.correct : color.error
        const markStyle = words[total] === ' ' ? { background: markColor } : { color: markColor }
        setTotal(t => t + 1)
        setTyped(t => [...t, { word: words[total], style: markStyle }])
        key !== words[total] && setError(e => e + 1)
    }
  }

  const renderTyped = useMemo(() => (
    <>
      {
        typed.map((t, i) => <span key={t.word + i} style={t.style}>{t.word}</span>)
      }
      {
        words.slice(total).split('').map((w, i) => <span key={i + w}>{w}</span>)
      }
    </>
  ), [typed])

  const resetTyping = useCallback(() => {
    setTyped([])
    setTotal(0)
    setError(0)
  }, [])

  return { typed: renderTyped, total, error, resetTyping }

}