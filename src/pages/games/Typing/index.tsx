import useInit from '@/hooks/typing/useInit'
import useEngine from '@/hooks/typing/useEngine'
import useTyped from '@/hooks/typing/useTyped'
import useResult from '@/hooks/typing/useResult'

import { isEmpty } from '@/utils/common/isEmpty'

import './index.css'
import Set from '@/components/typing/Set'
import Rank from '@/components/typing/Rank'
import Icon from '@/components/common/Icon'

import { TYPING_TIPS } from '@/constants/typingConfig'
import { useMemo } from 'react'

export default function Typing() {
  const {
    state,
    setState,
    mode,
    changeMode,
    words,
    updateWords,
    initCount,
    count,
    resetCount,
    pauseCount,
    startGame,
  } = useInit()

  const { typed, total, error, resetGame } = useTyped(
    state,
    words,
    setState,
    updateWords,
    resetCount,
  )

  const { result, speed, accuracy, changeResult, endGame } = useResult(
    initCount,
    count,
    total,
    error,
    setState,
    pauseCount,
  )

  useEngine(state, count, total, mode, words, startGame, resetGame, endGame)

  const showRank = useMemo(() => !isEmpty(result), [result])

  const showResult = useMemo(() => state === 'end', [state])

  return (
    <div
      className="typing"
      style={{
        justifyContent: showRank || showResult ? 'start' : 'center',
      }}
    >
      {showRank && (
        <Rank
          rank={result}
          clearRank={() => changeResult([])}
        />
      )}
      <div className="t-game">
        <div className="t-paragraph">
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
          {TYPING_TIPS[state]}
        </div>
      </div>
      {showResult && (
        <div className="t-results">
          <span className="tr-1">结果</span>
          <span className="tr-2">输入：{total}</span>
          <span className="tr-3">错误：{error}</span>
          <span className="tr-4">速度：{speed.toFixed(0)} 词/分</span>
          <span className="tr-5">准确性：{accuracy.toFixed(0)}%</span>
        </div>
      )}
    </div>
  )
}
