import { useEffect, useMemo, useState } from 'react'

import { Typed, State } from '@/types/specific/Typing'
import { TYPING_COLORS } from '@/constants/typingConfig'

const useTyped = (
  state: State,
  words: string,
  setState: React.Dispatch<React.SetStateAction<State>>,
  updateWords: () => void,
  resetCount: () => void,
) => {
  // 已输入
  const [typed, setTyped] = useState<Typed[]>([])
  // 输入总数
  const [total, setTotal] = useState(0)
  // 错误数
  const [error, setError] = useState(0)

  const resetGame = () => {
    setState('init')
    updateWords()
    resetCount()
    setTyped([])
    setTotal(0)
    setError(0)
  }

  const favourCode = (code: string) =>
    code.startsWith('Key') ||
    code.startsWith('Digit') ||
    code === 'Minus' ||
    code === 'Space'

  const typing = ({ code, key }: KeyboardEvent) => {
    // console.log('keyup event running...')
    if (!favourCode(code)) return
    if (state !== 'running') return

    setTyped(t => [
      ...t,
      { word: words[total], isCorrect: key === words[total] },
    ])
    setTotal(t => t + 1)
    if (key !== words[total]) {
      setError(e => e + 1)
    }
  }

  // 状态改变时重新绑定事件
  useEffect(() => {
    document.addEventListener('keyup', typing)
    return () => document.removeEventListener('keyup', typing)
  }, [typed, state])

  const renderTyped = useMemo(
    () => (
      <>
        {typed.map((t, i) => (
          <span
            key={t.word + i}
            style={{
              background:
                t.word === ' ' ? TYPING_COLORS[Number(t.isCorrect)] : undefined,
              color:
                t.word === ' ' ? undefined : TYPING_COLORS[Number(t.isCorrect)],
            }}
          >
            {t.word}
          </span>
        ))}
        {words
          .slice(total)
          .split('')
          .map((w, i) => (
            <span key={i + w}>{w}</span>
          ))}
      </>
    ),
    [typed],
  )

  return { typed: renderTyped, total, error, resetGame }
}

export default useTyped
