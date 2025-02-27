import { useEffect, useRef, useState } from 'react'

import './index.css'
import { useInit } from './hooks/useInit'
import CardZone from './components/CardZone'
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
    deadWall,
    doras,
    uraDoras,
    getRandomCards,
  } = useInit()

  const [index, setIndex] = useState(ton)

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

  useEffect(() => setIndex(ton), [ton])

  useEffect(() => {
    if (index === undefined) return
    console.log(index)
    const [rcards, pickCards] = getRandomCards(1, restCards)
    const { setWind, points, newCard, handCards, disCards } = player[index]
    const p = new Player(
      setWind,
      points,
      newCard,
      [...handCards],
      [...disCards],
    )
    p.addNewCard(pickCards[0])
    setRestCards(rcards)
    setPlayer(player.map((pp, i) => (i === index ? p : pp)))
  }, [index])

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

  const playCard = (pi: number, card: string, ci?: number) => {
    if (index !== pi) return
    const { setWind, points, newCard, handCards, disCards } = player[index]
    const p = new Player(setWind, points, newCard, handCards, disCards)
    if (ci !== undefined) {
      p.removeHandCards([ci])
      p.addHandCards([p.newCard])
    }
    p.removeNewCard()
    p.addDisCard(card)

    setIndex((index + 1) % player.length)
    setPlayer(player.map((pp, i) => (i === index ? p : pp)))
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
                newCard={p.newCard}
                handleCardClick={(card, ci) => playCard(i, card, ci)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
