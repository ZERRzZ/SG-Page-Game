import { useCallback, useEffect, useState } from "react"

import { TypingState } from "."

export const useTyped = (state: TypingState, words: string) => {

  const [typed, setTyped] = useState('')
  const [total, setTotal] = useState(0)
  const [error, setError] = useState(0)

  useEffect(() => {
    document.addEventListener('keyup', typing)
    return () => {
      document.removeEventListener('keyup', typing)
    }
  }, [typed, state]) // 状态改变时重新绑定事件

  const favourCode = (code: string) => code.startsWith('Key') || code.startsWith('Digit') || code === 'Minus' || code === 'Space'

  const typing = ({ code, key }: KeyboardEvent) => {
    console.log('typing event running...');
    if (state !== 'start') return
    if (!favourCode(code)) return
    setTyped(t => t + key)
    setTotal(t => t + 1)
  }

  const resetTyping = useCallback(() => {
    setTyped('')
    setTotal(0)
    setError(0)
  }, [])

  return { typed, resetTyping }

}