import { useState } from 'react'

import './index.css'
import IconFont from '@/components/IconFont'
import { useWords } from './useWords'
import { useCount } from './useCount'
import { useTyped } from './useTyped'

export type TypingState = 'init' | 'start' | 'pause' | 'finish'

export interface TypingColor {
  correct: string
  error: string
}

export default function Typing() {

  const [state, setState] = useState<TypingState>('init')
  const [color] = useState<TypingColor>({ correct: 'green', error: 'red' })

  const start = () => {
    setState('start')
    startCount()
  }

  const pause = () => {
    setState('pause')
    pauseCount()
  }

  const reset = () => {
    setState('init')
    updateWords()
    resetCount()
    resetTyping()
  }

  const finish = () => {
    setState('finish')
  }

  const { words, updateWords } = useWords(20)

  const { typed, resetTyping } = useTyped({ state, words, color, pause, start, reset })

  const { count, startCount, resetCount, pauseCount } = useCount(30, finish)

  return (
    <div className='typing'>
      <span className="t-count">倒计时：{count}</span>
      <div className="t-section">
        <div className="t-words">{words}</div>
        <div className="t-typed">{typed}</div>
      </div>
      <div className='t-reset' onClick={reset}>
        <IconFont type='icon-zhongzhi' color='inherit' />
      </div>
      {/* <div className="t-results">
        <span>结果</span>
        <span>准确性：95%</span>
        <span>错误：1</span>
        <span>输入：22</span>
      </div> */}
    </div>
  )

}