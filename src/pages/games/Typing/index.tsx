import { useEffect, useMemo, useState } from 'react'

import './index.css'
import Set from './Set'
import Rank from './Rank'
import IconFont from '@/components/IconFont'
import { useInit } from './hooks/useInit'
import { useWords } from './hooks/useWords'
import { useCount } from './hooks/useCount'
import { useTyped } from './hooks/useTyped'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { TypingColor, TypingResult, TypingState } from '@/types/Typing'

export default function Typing() {

  // 游戏状态
  const [state, setState] = useState<TypingState>('init')
  // 输入正确和错误时的颜色
  const [color] = useState<TypingColor>({ correct: 'green', error: 'red' })
  // 排名
  const [rank, changeRank] = useLocalStorage<TypingResult[]>('typingRank', [])

  // 初始设置项
  const { init, changeInit } = useInit()
  // 词句
  const { words, updateWords } = useWords(init.iword)
  // 倒计时
  const { count, startCount, resetCount, pauseCount } = useCount(init.icount)

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
    pauseCount()
    settle()
  }

  const { typed, total, error, resetTyping } = useTyped({ state, words, color, pause, start, reset })

  useEffect(() => count <= 0 ? finish() : undefined, [count])

  useEffect(() => total === words.length ? finish() : undefined, [total])

  useEffect(() => reset(), [init.icount, init.iword])

  const speed = useMemo(() => (total / (init.icount - count) * 60) || 0, [total, count, init.icount])

  const accuracy = useMemo(() => ((1 - error / total) * 100) || 0, [total, error])

  const settle = () => {
    const newRank: TypingResult = {
      rank: Number((speed * accuracy).toFixed(0)),
      total,
      error,
      speed: `${speed.toFixed(0)} 词/分`,
      accuracy: `${accuracy.toFixed(0)}%`,
      latest: true
    }
    if (rank instanceof Array !== true) changeRank([])
    rank.forEach(r => r.latest = false)
    rank.length > 4 && rank.splice(-1)
    const rr = [...rank, newRank]
    rr.sort((a, b) => b.rank - a.rank)
    rr.forEach((r, i) => r.id = i + 1)
    changeRank(rr)
  }

  const tips = {
    'init': '开始游戏',
    'start': '暂停游戏',
    'pause': '继续游戏',
    'finish': '重新开始',
  }

  return (
    <div className='typing'>
      <div className="t-game">
        <div className="t-header">
          <span className="t-count">倒计时：{count}</span>
          <Set init={init} changeInit={changeInit} />
        </div>
        <div className="t-words">{typed}</div>
        <div className='t-reset' onClick={reset}>
          <IconFont type='icon-reset' color='inherit' />
        </div>
      </div>
      {init.isTip ? <div className='t-tips'>输入<span className='tt-btn'>Enter</span>{tips[state]}</div> : ''}
      {
        state === 'finish' ?
          <div className="t-results">
            <span className='tr-1'>结果</span>
            <span className='tr-2'>输入：{total}</span>
            <span className='tr-3'>错误：{error}</span>
            <span className='tr-4'>速度：{speed.toFixed(0)} 词/分</span>
            <span className='tr-5'>准确性：{accuracy.toFixed(0)}%</span>
          </div>
          : ''
      }
      {rank && rank.length ? <Rank rank={rank} clearRank={() => changeRank([])} /> : ''}
    </div>
  )

}