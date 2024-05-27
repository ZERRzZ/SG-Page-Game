import { useMemo, useState } from 'react'

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

  const { typed, total, error, resetTyping } = useTyped({ state, words, color, pause, start, reset })

  const { count, startCount, resetCount, pauseCount } = useCount(30, finish)

  return (
    <div className='typing'>
      <div className="t-rank">

      </div>
      <div className="t-game">
        <span className="t-count">倒计时：{count}</span>
        <div className="t-words">{typed}</div>
        <div className='t-reset' onClick={reset}>
          <IconFont type='icon-zhongzhi' color='inherit' />
        </div>
      </div>
      {
        state === 'finish' ?
          <div className="t-results">
            <span>结果</span>
            <span>输入：{total}</span>
            <span>错误：{error}</span>
            <span>速度：{`${(total / (30 - count) * 60).toFixed(0)} 词/分`}</span>
            <span>准确性：{`${((1 - error / total) * 100).toFixed(0)}%`}</span>
          </div> : ''
      }
    </div>
  )

}