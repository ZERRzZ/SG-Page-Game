import { useEffect, useRef, useState } from 'react'

import './index.css'
import { useInit } from './hooks/useInit'
import TileDisplay from './components/TileDisplay'
import Icon from '@/components/Icon'
import Points from './components/Points'
import { Player } from './Player'

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
    playIndex,
    nextPlayIndex,
    deadWall,
    doras,
    uraDoras,
    getRandomCards,
  } = useInit()

  const mjRef = useRef<HTMLDivElement>(null)

  const start = () => {
    setStatus('start')
    if (mjRef.current) {
      mjRef.current.scrollTop = mjRef.current.clientHeight
    }
  }

  const back = () => {
    setStatus('init')
    mjRef.current && (mjRef.current.scrollTop = 0)
  }

  useEffect(() => {
    if (playIndex === -1) return
    const [rcards, pickCards] = getRandomCards(1, restCards)
    const np = new Player(player[playIndex])
    np.addDraw(pickCards[0])
    setRestCards(rcards)
    setPlayer(player.map((p, i) => (i === playIndex ? np : p)))
  }, [playIndex])

  useEffect(() => {
    console.log('剩余麻将: ', restCards)
  }, [restCards])

  // useEffect(() => {
  //   console.log(index)
  //   if (index === undefined) return
  //   if (index === 0) return
  //   setTimeout(() => {
  //     const p = [...player]
  //     // p[index].f

  //     console.log(player[index])
  //     setIndex((index + 1) % 4)
  //   }, 1000)
  // }, [index])

  const disCard = (pi: number, tile: string, ti?: number) => {
    if (playIndex !== pi) return
    const np = new Player(player[playIndex])
    if (ti !== undefined) {
      np.removeHand([ti])
      np.addHand([np.draw])
      np.addRiver({ type: 'tegiri', tile })
    } else {
      np.addRiver({ type: 'tsumogiri', tile })
    }
    np.clearDraw()
    nextPlayIndex()
    setPlayer(player.map((p, i) => (i === playIndex ? np : p)))
  }

  return (
    <div ref={mjRef} className="mahjong">
      <div className="prepare">
        <div className="start" onClick={start}>
          <Icon type="icon-start" />
        </div>
      </div>
      <div className="playing">
        <div className="header">
          <div className="dora">
            <div>DORA</div>
            <TileDisplay tiles={doras} />
          </div>
          <div className="back" onClick={back}>
            <Icon type="icon-back" />
          </div>
        </div>
        <div className="player">
          <Points player={player} />
          <div className="discard-zone">
            {player.map((p, i) => (
              <TileDisplay
                className={`discard p${i + 1}`}
                key={p.setWind}
                tiles={p.river}
              />
            ))}
          </div>
          <div className="player-zone">
            {player.map((p, pi) => (
              <TileDisplay
                className={`player p${pi + 1}`}
                key={p.setWind}
                tiles={p.hand}
                draw={p.draw}
                tileClick={(tile, ti) => disCard(pi, tile, ti)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
