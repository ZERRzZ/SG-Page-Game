import './index.css'
import { useInit } from './hooks/useInit'
import CardZone from './components/CardZone'
import { useRef } from 'react'
import Icon from '@/components/Icon'
import Points from './components/Points'

export default function Mahjong() {
  const {
    status,
    setStatus,
    restCards,
    setRestCards,
    player,
    setPlayer,
    ton,
    setTon,
    deadWall,
    doras,
    uraDoras,
  } = useInit()

  const mahjongRef = useRef<HTMLDivElement>(null)

  const start = () => {
    setStatus('start')
    if (mahjongRef.current) {
      mahjongRef.current.scrollTop = mahjongRef.current.clientHeight
    }
  }

  const back = () => {
    setStatus('init')
    mahjongRef.current && (mahjongRef.current.scrollTop = 0)
  }

  const playCard = (card: string, index: number) => {
    console.log(card, index)
  }

  return (
    <div ref={mahjongRef} className="mahjong">
      <div className="prepare">
        <div className="start" onClick={start}>
          <Icon type="icon-start" />
        </div>
      </div>
      <div className="playing">
        <div className="header">
          <div className="dora">
            <div>DORA</div>
            <CardZone cards={doras} />
          </div>
          <div className="back" onClick={back}>
            <Icon type="icon-back" />
          </div>
        </div>
        <div className="player">
          <Points player={player} />
          <div className="discard-zone">
            {player.map((p, i) => (
              <CardZone
                className={`discard p${i + 1}`}
                key={p.setWind}
                cards={p.disCards}
              />
            ))}
          </div>
          <div className="player-zone">
            {player.map((p, i) => (
              <CardZone
                className={`player p${i + 1}`}
                key={p.setWind}
                cards={p.handCards}
                handleCardClick={playCard}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
