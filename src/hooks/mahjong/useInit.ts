import { useEffect, useMemo, useState } from 'react'

import { Player } from '@/utils/mahjong/player'
import { Meld, Status } from '@/types/specific/Mahjong'
import { getRandomTiles } from '@/utils/mahjong/getRandomTiles'
import { isEmpty } from '@/utils/common/isEmpty'

const M = ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m']
const S = ['1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s']
const P = ['1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p']
const Z = ['1z', '2z', '3z', '4z', '5z', '6z', '7z']
const RED = ['0m', '0s', '0p']

export const MAHJONG = M.concat(S, P, Z)
  .map(v => (/5[msp]/.test(v) ? [v, v, v] : [v, v, v, v]))
  .flat()
  .concat(RED)

export const SETWINDS = ['东', '南', '西', '北']

export const POINTS = 25000

export const useInit = () => {
  const [status, setStatus] = useState<Status>('init')
  const [restCards, setRestCards] = useState<string[]>([])
  const [player, setPlayer] = useState<Player[]>([])
  const [deadWall, setDeadWall] = useState<string[]>([])
  const [doraCount, setDoraCount] = useState<number>(1)

  // 东家位置和当前顺位
  const [ton, setTon] = useState<number>(-1)
  const [playIndex, setPlayIndex] = useState<number>(ton)
  const nextPlayr = (index?: number) =>
    isEmpty(index)
      ? setPlayIndex((playIndex + 1) % SETWINDS.length)
      : setPlayIndex(index!)

  // 宝牌
  const doras = useMemo(
    () => Array.from({ length: doraCount }).map((_, i) => deadWall[4 + 2 * i]),
    [deadWall, doraCount],
  )
  const uraDoras = useMemo(
    () => Array.from({ length: doraCount }).map((_, i) => deadWall[5 + 2 * i]),
    [deadWall, doraCount],
  )

  // 鸣牌列表
  const [melds, setMelds] = useState<Meld[]>([])

  useEffect(() => {
    switch (status) {
      case 'init':
        setPlayIndex(-1)
        break
      case 'deal':
        // 确立东家位置
        const L = SETWINDS.length
        const i = Math.floor(Math.random() * L)
        const sws = Array.from(
          { length: L },
          (_, idx) => SETWINDS[(i + idx) % L],
        )
        const ton = sws.findIndex(v => v === '东')
        // 初始化 player 自风和手牌
        const ps = sws.map(sw => new Player({ setWind: sw, points: POINTS }))
        const [restTiles, playerTiles] = initDeal(ton, MAHJONG, L)
        ps.forEach((p, i) => p.addHand(playerTiles[i]))
        // 初始化王牌
        const [restTiles2, deadCards] = getRandomTiles(14, restTiles)
        // 设置状态
        setTon(ton)
        setPlayIndex(ton)
        setPlayer(ps)
        setRestCards(restTiles2)
        setDeadWall(deadCards)
        setDoraCount(1)
        setStatus('draw')
        break
    }
  }, [status])

  const initDeal = (ton: number, tiles: string[], L: number) => {
    let i = ton
    let restTiles = [...tiles]
    let count = 1
    let playerTiles: string[][] = []
    while (count++ <= 4) {
      const [rests, picks] = getRandomTiles(13, restTiles)
      restTiles = rests
      playerTiles[i] = picks
      i = (i + 1) % L
    }
    return [restTiles, playerTiles] as [string[], string[][]]
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
    playIndex,
    nextPlayr,
    deadWall,
    doras,
    uraDoras,
    melds,
    setMelds,
  }
}
