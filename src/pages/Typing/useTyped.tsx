import { useCallback, useEffect, useState } from "react"

import { TypingColor, TypingState } from "."

export interface TypedHook {
  state: TypingState
  words: string
  color: TypingColor
  start: () => void
  pause: () => void
  reset: () => void
}

export const useTyped = ({ state, words, color, pause, start, reset }: TypedHook) => {

  const [typed, setTyped] = useState(<></>)
  const [total, setTotal] = useState(0)
  const [count, setCount] = useState(0)
  const [error, setError] = useState(0)

  useEffect(() => {
    document.addEventListener('keyup', typing)
    return () => {
      document.removeEventListener('keyup', typing)
    }
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
        if (key === words[count]) {
          // setTyped(t => <span style={{ color: color.correct }}>{words[count]}</span>)
        } else {
          // setTyped(t => <span style={{ color: color.error }}>{words[count]}</span>)
          setError(e => e + 1)
        }
        setTotal(t => t + 1)
        setCount(t => t + 1)
    }
  }

  const markTyping = (key: string, word: string) => {
    const markColor = key === word ? color.correct : color.error
    const markStyle = key === 'Space' ? { background: markColor } : { color: markColor }
    return <span style={markStyle}>{word}</span>
  }

  const nextTyping = useCallback(() => {
    setTyped(<></>)
    setCount(0)
  }, [])

  const resetTyping = useCallback(() => {
    nextTyping()
    setTotal(0)
    setError(0)
  }, [])

  return { typed, resetTyping }

}