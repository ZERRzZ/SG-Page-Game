import { useState } from 'react'
import { Table } from 'antd'

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

export interface TypingResult {
  rank: number
  total: number
  error: number
  speed: string
  accuracy: string
  latest: boolean
}

export default function Typing() {

  const [state, setState] = useState<TypingState>('init')

  const [color] = useState<TypingColor>({ correct: 'green', error: 'red' })

  const [ranked, setRanked] = useState<TypingResult[]>(JSON.parse(localStorage.getItem('tRank') || "[]"))

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
    const tRank: TypingResult = {
      rank: Number((speed(total, count) * accuracy(total, error)).toFixed(0)),
      total,
      error,
      speed: `${speed(total, count).toFixed(0)} 词/分`,
      accuracy: `${accuracy(total, error).toFixed(0)} %`,
      latest: true
    }
    // console.log('tRank': tRank);
    
    console.log(ranked);
    setRanked(r => {
      if (r instanceof Array !== true) r = []
      r.length >= 5 && r.splice(4)
      r.forEach(r => r.latest = false)
      r.push(tRank)
      r.sort((a, b) => b.rank - a.rank)
      r.forEach((r, i) => r.rank = i + 1)
      // localStorage.setItem('tRank', JSON.stringify(ranked))
      return [...r]
    })
  }

  const { words, updateWords } = useWords(20)

  const { typed, total, error, resetTyping } = useTyped({ state, words, color, pause, start, reset, finish })

  const { count, startCount, resetCount, pauseCount } = useCount(30, finish)

  const speed = (total: number, count: number) => ((total / (30 - count) * 60) || 0)

  const accuracy = (total: number, error: number) => (((1 - error / total) * 100) || 0)

  const rankColumns = [
    { title: '分数', dataIndex: 'rank', key: 'rank', align: 'center' as 'center' },
    { title: '速度', dataIndex: 'speed', key: 'speed', align: 'center' as 'center' },
    { title: '准确性', dataIndex: 'accuracy', key: 'accuracy', align: 'center' as 'center' }
  ]

  return (
    <div className='typing'>
      {
        ranked.length > 0 ?
          <div className="t-rank">
            <span className='tr-1'>排名</span>
            <Table className='tr-table' columns={rankColumns} dataSource={ranked} pagination={false} rowKey='rank' />
          </div>
          : ''
      }
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
            <span className='tr-1'>结果</span>
            <span className='tr-2'>输入：{total}</span>
            <span className='tr-3'>错误：{error}</span>
            <span className='tr-4'>速度：{speed(total, count).toFixed(0)}  词/分</span>
            <span className='tr-5'>准确性：{accuracy(total, error).toFixed(0)} %</span>
          </div> : ''
      }
    </div>
  )

}