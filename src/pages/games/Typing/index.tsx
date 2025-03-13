import { useEffect } from 'react'

import './index.css'
import Set from '@/components/typing/Set'
import Rank from '@/components/typing/Rank'
import Icon from '@/components/common/Icon'
import { useCount } from '@/hooks/common/useCount'
import { useWords } from '@/hooks/common/useWords'
import { useInit } from '@/hooks/typing/useInit'
import { useTyped } from '@/hooks/typing/useTyped'
import { useResult } from '@/hooks/typing/useResult'

export default function Typing() {
  const { state, word, initCount, mode, setState, changeMode } = useInit()

  const { words, updateWords } = useWords(word)

  const { count, startCount, resetCount, pauseCount } = useCount(initCount)

  const { typed, total, error, resetGame } = useTyped({
    state,
    words,
    setState,
    updateWords,
    startCount,
    resetCount,
  })

  const { result, speed, accuracy, changeResult, endGame } = useResult({
    initCount,
    count,
    total,
    error,
    setState,
    pauseCount,
  })

  const tips = { init: '开始游戏', running: '重新开始', end: '重新开始' }

  useEffect(() => {
    count <= 0 && endGame()
  }, [count])

  useEffect(() => {
    total === words.length && endGame()
  }, [total])

  useEffect(() => {
    resetGame()
  }, [mode])

  return (
    <div className="typing">
      <div className="t-game">
        <div className="t-header">
          <span className="t-count">倒计时：{count}</span>
          <Set
            mode={mode}
            changeMode={changeMode}
          />
        </div>
        <div className="t-words">{typed}</div>
        <div
          className="t-reset"
          onClick={resetGame}
        >
          <Icon
            type="i-common-reset"
            color="inherit"
          />
        </div>
      </div>
      <div className="t-tips">
        输入
        <span className="tt-btn">Enter</span>
        {tips[state]}
      </div>
      {state === 'end' && (
        <div className="t-results">
          <span className="tr-1">结果</span>
          <span className="tr-2">输入：{total}</span>
          <span className="tr-3">错误：{error}</span>
          <span className="tr-4">速度：{speed.toFixed(0)} 词/分</span>
          <span className="tr-5">准确性：{accuracy.toFixed(0)}%</span>
        </div>
      )}
      {result.length && (
        <Rank
          rank={result}
          clearRank={() => changeResult([])}
        />
      )}
    </div>
  )
}
