import { useEffect, useMemo, useRef } from 'react'

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
    // ton,
    // setTon,
    playIndex,
    nextPlayIndex,
    // deadWall,
    doras,
    // uraDoras,
    getRandomCards,
  } = useInit()

  const mjRef = useRef<HTMLDivElement>(null)

  const start = () => {
    setStatus('deal')
    if (mjRef.current) {
      mjRef.current.scrollTop = mjRef.current.clientHeight
    }
  }

  const back = () => {
    setStatus('init')
    mjRef.current && (mjRef.current.scrollTop = 0)
  }

  useEffect(() => {
    console.log('剩余麻将: ', restCards)
  }, [restCards])

  const disCard = (pi: number, tile: string, ti?: number) => {
    if (playIndex !== pi) return
    if (playIndex !== 0) return
    const np = new Player(player[playIndex])
    ti === undefined ? np.tsumogiri(tile) : np.tegiri(tile, ti)
    setPlayer(player.map((p, i) => (i === playIndex ? np : p)))
  }

  const rivers = useMemo(
    () => player.map(p => p.river.map(r => r.tile).join('')).join(''),
    [player],
  )

  useEffect(() => {
    if (status !== 'play') return
    if (!rivers) return
    const p = player[playIndex]
    const lastRiver = p.river[p.river.length - 1]
    isNagi(lastRiver.tile)
    nextPlayIndex()
  }, [rivers])

  useEffect(() => {
    if (playIndex === -1) return
    const [rcards, pickCards] = getRandomCards(1, restCards)
    const np = new Player(player[playIndex])
    np.addDraw(pickCards[0])
    setRestCards(rcards)
    setPlayer(player.map((p, i) => (i === playIndex ? np : p)))
  }, [playIndex])

  useEffect(() => {
    if (playIndex === -1 || playIndex === 0) return
    const np = new Player(player[playIndex])
    if (!np.draw) return
    setTimeout(() => {
      np.tsumogiri(np.draw)
      setPlayer(player.map((p, i) => (i === playIndex ? np : p)))
    }, 1000)
  }, [player, playIndex])

  const isNagi = (tile: string) => {
    const hands = player.map((p, i) => (i === playIndex ? '' : p.hand.join('')))
    hands.forEach((hand, i) => {
      const reg = new RegExp(
        /[05][mps]/.test(tile) ? `[05][${tile[1]}]` : `${tile}`,
        'g',
      )
      const ts = hand.match(reg)
      if (!ts) return
      if (ts.length === 3) {
        return console.log('player' + i + 'Kong')
      }
      if (ts.length === 2) {
        return console.log('player' + i + 'Pung')
      }
    })
    // const hand = hands[(playIndex + 1) % hands.length]
    // console.log(hand, hands)
    // if (/z/.test(tile)) return
    // if (/[]/)
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
