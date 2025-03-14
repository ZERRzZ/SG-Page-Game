import { useEffect, useRef, useState } from 'react'

import './index.css'
import { SETWINDS, useInit } from '@/hooks/mahjong/useInit'
import TileDisplay from '../../../components/mahjong/TileDisplay'
import Icon from '@/components/common/Icon'
import Points from '../../../components/mahjong/Points'
import { Player } from '@/utils/mahjong/player'
import type { NagiType } from '@/types/specific/Mahjong'
import { isEmpty } from '@/utils/common/isEmpty'

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
    nextPlayr,
    // deadWall,
    doras,
    // uraDoras,
  } = useInit()

  const mjRef = useRef<HTMLDivElement>(null)

  const [nagiList, setNagiList] = useState<NagiType[]>()

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
    if (status !== 'draw' && status !== 'giri' && status !== 'nagi') return
    const np = new Player(player[playIndex])
    switch (status) {
      case 'draw':
        const rests = np.drawATile(restCards)
        setRestCards(rests)
        setPlayer(player.map((p, i) => (i === playIndex ? np : p)))
        setStatus('giri')
        break
      case 'giri':
        // 自动打牌
        if (playIndex === -1 || playIndex === 0) return
        if (!np.draw) return
        setTimeout(() => {
          np.tsumogiri(np.draw)
          setPlayer(player.map((p, i) => (i === playIndex ? np : p)))
          setStatus('nagi')
        }, 1000)
        break
      case 'nagi':
        const lastRiverTile = np.river.pop()!.tile
        const nagiList = whoNagi(lastRiverTile)
        console.log(nagiList)
        if (isEmpty(nagiList)) {
          nextPlayr()
          setStatus('draw')
        } else {
          setNagiList(nagiList)
        }
    }
  }, [status])

  // 手动打牌
  const disCard = (pi: number, tile: string, ti?: number) => {
    if (playIndex !== pi) return
    if (playIndex !== 0) return
    const np = new Player(player[playIndex])
    ti === undefined ? np.tsumogiri(tile) : np.tegiri(tile, ti)
    setPlayer(player.map((p, i) => (i === playIndex ? np : p)))
    setStatus('nagi')
  }

  const whoNagi = (tile: string) => {
    const hands = player.map((p, i) => (i === playIndex ? '' : p.hand.join('')))
    const result: NagiType[] = []
    // 碰、杠
    hands.forEach((hand, i) => {
      const n = tile[0]
      const t = tile[1]
      const reg = new RegExp(/[05]/.test(n) ? `[05][${t}]` : `${tile}`, 'g')
      const tiles = hand.match(reg)
      if (tiles?.length === 2) {
        result.push({ type: 'pung', index: i, tiles })
      } else if (tiles?.length === 3) {
        result.push({ type: 'kong', index: i, tiles })
      }
    })
    // 吃
    const nextPlayIndex = (playIndex + 1) % SETWINDS.length
    const hand = player[nextPlayIndex].hand
    const n = Number(tile[0])
    const t = tile[1]
    if (t === 'z') return result
    const pre2 = n - 2 + t
    const pre = n - 1 + t
    const next = n + 1 + t
    const next2 = n + 2 + t
    if (hand.includes(pre2) && hand.includes(pre)) {
      result.push({ type: 'chi', index: nextPlayIndex, tiles: [pre2, pre] })
    }
    if (hand.includes(pre) && hand.includes(next)) {
      result.push({ type: 'chi', index: nextPlayIndex, tiles: [pre, next] })
    }
    if (hand.includes(next) && hand.includes(next2)) {
      result.push({ type: 'chi', index: nextPlayIndex, tiles: [next, next2] })
    }
    return result
  }

  useEffect(() => {
    console.log('剩余麻将: ', restCards)
  }, [restCards])

  return (
    <div
      ref={mjRef}
      className="mahjong"
    >
      <div className="prepare">
        <div
          className="start"
          onClick={start}
        >
          <Icon type="i-common-start" />
        </div>
      </div>
      <div className="playing">
        <div className="header">
          <div className="dora">
            <div>DORA</div>
            <TileDisplay tiles={doras} />
          </div>
          <div
            className="back"
            onClick={back}
          >
            <Icon type="i-common-back" />
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
