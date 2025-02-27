import { useEffect, useMemo, useState } from 'react'

import { Status } from '../type'
import { Player } from '../Player'

export const useInit = () => {
  const ms = ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m']
  const ss = ['1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s']
  const ps = ['1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p']
  const zs = ['1z', '2z', '3z', '4z', '5z', '6z', '7z']
  const redDoras = ['0m', '0s', '0p']

  const allMJ = [...ms, ...ss, ...ps, ...zs]
    .map(v => {
      if (v.search(/5[msp]/) !== -1) {
        return [v, v, v]
      }
      return [v, v, v, v]
    })
    .flat()
    .concat(redDoras)

  const setWinds = ['东', '南', '西', '北']

  const points = 25000

  const [status, setStatus] = useState<Status>('init')
  const [restCards, setRestCards] = useState<string[]>([])
  const [player, setPlayer] = useState<Player[]>([])
  const [ton, setTon] = useState<number>()
  const [deadWall, setDeadWall] = useState<string[]>([])
  const [doraCount, setDoraCount] = useState<number>(1)

  useEffect(() => {
    if (status === 'start') {
      init()
    }
  }, [status])

  const doras = useMemo(() => {
    const i = 4
    let count = 1
    let d: string[] = []
    while (count++ <= doraCount) {
      d.push(deadWall[i + 2 * (count - 1)])
    }
    return d
  }, [deadWall, doraCount])

  const uraDoras = useMemo(() => {
    const i = 5
    let count = 1
    let d: string[] = []
    while (count++ <= doraCount) {
      d.push(deadWall[i + 2 * (count - 1)])
    }
    return d
  }, [deadWall, doraCount])

  const init = () => {
    // 确立东家位置
    const L = setWinds.length
    const i = Math.floor(Math.random() * L)
    const sws = Array.from({ length: L }, (_, idx) => setWinds[(i + idx) % L])
    const ton = sws.findIndex(v => v === '东')
    // 初始化 player 自风和手牌
    const ps = sws.map(sw => new Player(sw, points))
    const [rcards, plrCards] = initDeal(ton, allMJ, L)
    ps.forEach((p, i) => p.addHandCards(plrCards[i]))
    // 初始化王牌
    const [rcards2, deadCards] = getRandomCards(14, rcards)
    // 设置状态
    setTon(ton)
    setPlayer(ps)
    setRestCards(rcards2)
    setDeadWall(deadCards)
    setDoraCount(1)
  }

  const initDeal = (ton: number, cards: string[], L: number) => {
    let i = ton
    let rcards = [...cards]
    let count = 1
    let plrCards: string[][] = []
    while (count++ <= 4) {
      const [rcs, pcs] = getRandomCards(13, rcards)
      rcards = rcs
      plrCards[i] = pcs
      i = (i + 1) % L
    }
    return [rcards, plrCards] as [string[], string[][]]
  }

  const getRandomCards = (length: number, cards: string[]) => {
    const pickCards: string[] = []
    const rcards = [...cards]
    while (length-- > 0) {
      const i = Math.floor(Math.random() * rcards.length)
      pickCards.push(rcards[i])
      rcards.splice(i, 1)
    }
    return [rcards, pickCards]
  }

  return {
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
  }
}
