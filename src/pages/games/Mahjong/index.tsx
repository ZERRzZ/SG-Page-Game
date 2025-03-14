import { useEffect } from 'react'

import './index.css'
import { SETWINDS, useInit } from '@/hooks/mahjong/useInit'
import TileDisplay from '../../../components/mahjong/TileDisplay'
import Icon from '@/components/common/Icon'
import Points from '../../../components/mahjong/Points'
import { Player } from '@/utils/mahjong/player'
import type { Meld } from '@/types/specific/Mahjong'
import { isEmpty } from '@/utils/common/isEmpty'
import MeldBar from '@/components/mahjong/MeldBar'
import { chi } from '@/utils/mahjong/chi'
import { kong, kong } from '@/utils/mahjong/kong.ts'
import { pung } from '@/utils/mahjong/pung'

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
    melds,
    setMelds,
  } = useInit()

  const start = () => {
    setStatus('deal')
  }

  const back = () => {
    setStatus('init')
  }

  useEffect(() => {
    if (status !== 'draw' && status !== 'giri' && status !== 'nagi') return
    if (isEmpty(restCards)) return setStatus('end')
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
        setTimeout(() => {
          np.draw ? np.tsumogiri(np.draw) : np.tegiri(np.hand[0], 0)
          setPlayer(player.map((p, i) => (i === playIndex ? np : p)))
          setStatus('nagi')
        }, 1000)
        break
      case 'nagi':
        const lastRiverTile = np.river.pop()!.tile
        const nagiList = whoNagi(lastRiverTile)
        if (isEmpty(nagiList)) {
          nextPlayr()
          setStatus('draw')
        } else {
          setMelds(nagiList)
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
    const hands = player.map((p, i) => (i === playIndex ? '' : p.hand))
    const result: Meld[] = []
    // 碰、杠
    hands.forEach((hand, i) => {
      if (!hand) return
      const pungs = pung(hand, tile)
      const kongs = kong(hand, tile)

      const n = tile[0]
      const t = tile[1]
      const reg = new RegExp(/[05]/.test(n) ? `[05][${t}]` : `${tile}`, 'g')
      const tiles = hand.match(reg)
      if (tiles) {
        if (tiles.length >= 2) {
          result.push({ type: 'pung', index: i, tiles })
        }
        if (tiles?.length === 3) {
          result.push({ type: 'kong', index: i, tiles })
        }
      }
    })
    // 吃
    const nextPlayIndex = (playIndex + 1) % SETWINDS.length
    const hand = player[nextPlayIndex].hand
    const r = chi(hand, tile)
    r.forEach(rr =>
      result.push({ type: 'chi', index: nextPlayIndex, tiles: rr }),
    )
    return result
  }

  const handleMeld = (meld: Meld) => {
    const p1 = new Player(player[meld.index])
    const p2 = new Player(player[playIndex])
    const tile = p2.removeRiver()!.tile
    let meldTiles = meld.tiles
    let index = -1
    if (playIndex === (meld.index + 1) % SETWINDS.length) {
      meldTiles = meldTiles.concat(tile)
      index = meldTiles.length - 1
    } else if (meld.index === (playIndex + 1) % SETWINDS.length) {
      meldTiles = [tile].concat(meldTiles)
      index = 0
    } else {
      meldTiles.splice(1, 0, tile)
      index = 1
    }
    p1.naku(meld.type, meldTiles, index)
    setPlayer(
      player.map((p, i) => (i === meld.index ? p1 : i === playIndex ? p2 : p)),
    )
    setMelds([])
    nextPlayr(meld.index)
    meld.type === 'kong' ? setStatus('draw') : setStatus('giri')
  }

  const handleNotMeld = () => {
    setMelds([])
    nextPlayr()
    setStatus('draw')
  }

  return (
    <div className="mahjong">
      {status === 'init' ? (
        <div className="prepare">
          <div
            className="start"
            onClick={start}
          >
            <Icon type="i-common-start" />
          </div>
        </div>
      ) : (
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
              {isEmpty(melds) || (
                <MeldBar
                  list={melds}
                  meld={handleMeld}
                  notMeld={handleNotMeld}
                />
              )}
            </div>
            <div className="meld-area">
              {player.map((p, i) => (
                <TileDisplay
                  className={`meld m${i + 1}`}
                  key={p.setWind}
                  tiles={p.meld}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
