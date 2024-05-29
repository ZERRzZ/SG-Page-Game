import { useEffect, useState } from 'react'
import { Button, Table } from 'antd'

import './index.css'
import IconFont from '@/components/IconFont'
import { useWords } from './useWords'
import { useCount } from './useCount'
import { useTyped } from './useTyped'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export type TypingState = 'init' | 'start' | 'pause' | 'finish'

export interface TypingColor {
  correct: string
  error: string
}

export interface TypingResult {
  id?: number
  rank: number
  total: number
  error: number
  speed: string
  accuracy: string
  latest: boolean
}

export default function Typing() {

  // 游戏状态
  const [state, setState] = useState<TypingState>('init')
  const [color] = useState<TypingColor>({ correct: 'green', error: 'red' })

  let [rank, changeRank] = useLocalStorage<TypingResult[]>('typingRank')

  const { words, updateWords } = useWords(20)
  const { count, startCount, resetCount, pauseCount } = useCount(30)

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

  useEffect(() => {
    !count && finish()
  }, [count])

  useEffect(() => {
    total === words.length && finish()
  }, [total])

  const settle = () => {
    const newRank: TypingResult = {
      rank: Number((speed(total, count) * accuracy(total, error)).toFixed(0)),
      total,
      error,
      speed: `${speed(total, count).toFixed(0)} 词/分`,
      accuracy: `${accuracy(total, error).toFixed(0)}%`,
      latest: true
    }
    if (rank instanceof Array !== true) rank = []
    rank.forEach(r => r.latest = false)
    rank.length > 4 && rank.splice(-1)
    const rr = [...rank, newRank]
    rr.sort((a, b) => b.rank - a.rank)
    rr.forEach((r, i) => r.id = i + 1)
    changeRank(rr)
  }

  const speed = (total: number, count: number) => ((total / (30 - count) * 60) || 0)

  const accuracy = (total: number, error: number) => (((1 - error / total) * 100) || 0)

  const rankColumns = [
    { title: '分数', dataIndex: 'rank', key: 'rank', align: 'center' as 'center' },
    { title: '速度', dataIndex: 'speed', key: 'speed', align: 'center' as 'center' },
    { title: '准确性', dataIndex: 'accuracy', key: 'accuracy', align: 'center' as 'center' }
  ]

  const clearRank = () => changeRank([])

  return (
    <div className='typing'>
      {
        rank && rank.length ?
          <div className="t-rank">
            <span className='tr-1'>排名</span>
            <Table className='tr-table' columns={rankColumns} dataSource={rank} pagination={false} rowKey='id' />
            <Button type='primary' onClick={clearRank}>清空排名</Button>
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
            <span className='tr-5'>准确性：{accuracy(total, error).toFixed(0)}%</span>
          </div> : ''
      }
    </div>
  )

}