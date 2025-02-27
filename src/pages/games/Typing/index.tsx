import { useEffect } from 'react'

import './index.css'
import Set from './Set'
import Rank from './Rank'
import Icon from '@/components/Icon'
import { useCount, useInit, useResult, useTyped, useWords } from './hooks'

export default function Typing() {

  const { init, changeInit } = useInit()

  const { words, updateWords } = useWords(init.word)

  const { count, startCount, resetCount, pauseCount } = useCount(init.count)

  const { typed, total, error, resetGame } = useTyped({ state: init.state, words, changeInit, updateWords, startCount, resetCount })

  const { result, speed, accuracy, changeResult, endGame } = useResult({ icount: init.count, count, total, error, changeInit, pauseCount })

  const tips = { init: '开始游戏', start: '重新开始', finish: '重新开始' }

  useEffect(() => {
    count <= 0 && endGame()
  }, [count])

  useEffect(() => {
    total === words.length && endGame()
  }, [total])

  useEffect(() => {
    resetGame()
  }, [init.tMode])

  return (
    <div className='typing'>
      <div className="t-game">
        <div className="t-header">
          <span className="t-count">倒计时：{count}</span>
          <Set {...init} changeInit={changeInit} />
        </div>
        <div className="t-words">{typed}</div>
        <div className='t-reset' onClick={resetGame}>
          <Icon type='icon-reset' color='inherit' />
        </div>
      </div>
      {
        init.showTip ?
          <div className='t-tips'>
            输入
            <span className='tt-btn'>Enter</span>
            {tips[init.state]}
          </div>
          : ''
      }
      {
        init.state === 'finish' ?
          <div className="t-results">
            <span className='tr-1'>结果</span>
            <span className='tr-2'>输入：{total}</span>
            <span className='tr-3'>错误：{error}</span>
            <span className='tr-4'>速度：{speed.toFixed(0)} 词/分</span>
            <span className='tr-5'>准确性：{accuracy.toFixed(0)}%</span>
          </div>
          : ''
      }
      {result.length ? <Rank rank={result} clearRank={() => changeResult([])} /> : ''}
    </div>
  )

}