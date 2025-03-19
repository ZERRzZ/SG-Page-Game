import { useEffect, useState } from 'react'

import './index.css'
import { TypingResult } from '@/types/specific/Typing'
import Icon from '@/components/common/Icon'
import { wait } from '@/utils/common/wait'

interface IProps {
  rank: TypingResult[]
  clearRank: () => void
}

export default function Rank({ rank, clearRank }: IProps) {
  const [clickTime, setClickTime] = useState(0)

  const clear = () => {
    if (clickTime === 0) {
      return setClickTime(clickTime + 1)
    }
    setClickTime(0)
    clearRank()
  }

  useEffect(() => {
    if (!clickTime) return
    wait(1000).then(() => setClickTime(0))
  }, [clickTime])

  return (
    <div className="t-rank">
      <span className="tr-title">
        <Icon
          type="i-common-rank"
          size="1.4em"
        />
      </span>
      <div className="tr-content">
        <div className="trc-row">
          <span>排名</span>
          <span>分数</span>
          <span>速度</span>
          <span>准确性</span>
        </div>
        {rank?.map(r => (
          <div
            className="trc-row"
            key={r.id}
          >
            <span className="trc-rank">
              {r.latest ? (
                <div className="trc-new">
                  <Icon
                    type="i-common-new"
                    size="1.6em"
                    color="var(--theme-dark)"
                  />
                </div>
              ) : (
                ''
              )}
              {r.rank === 1 ? (
                <Icon
                  type="i-common-top"
                  size="1.4em"
                />
              ) : (
                r.rank
              )}
            </span>
            <span>{r.score}</span>
            <span>{r.speed}</span>
            <span>{r.accuracy}</span>
          </div>
        ))}
      </div>
      <div
        className="t-clear"
        onClick={clear}
      >
        <Icon
          type="i-common-clear"
          size="1.2em"
        />
        {clickTime ? <span>请再次确认</span> : ''}
      </div>
    </div>
  )
}
