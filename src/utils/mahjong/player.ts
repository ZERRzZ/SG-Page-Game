import type { Meld, MeldType, River, RongType } from '@/types/specific/Mahjong'
import { sortTiles } from './sortTiles'
import { getRandomTiles } from './getRandomTiles'
import { getDuplicates } from '../common/getDuplicates'
import { removeElements } from '../common/removeElements'
import { getMJChows } from './getMJChows'
import { isEmpty } from '../common/isEmpty'

/** player
 * @member points 点数
 * @member setWind 自风
 * @member draw 摸牌
 * @member hand 手牌
 * @member river 牌河
 */
export class Player {
  points: number
  setWind: string
  draw: string
  riichi: boolean
  hand: string[]
  river: River[]
  meld: Meld[]

  constructor(p: Partial<Player>) {
    this.points = p.points || 25000
    this.setWind = p.setWind || '东'
    this.draw = p.draw || ''
    this.riichi = p.riichi || false
    this.hand = Array.from(p.hand || [])
    this.river = Array.from(p.river || [])
    this.meld = Array.from(p.meld || [])
  }

  changePoints(points: number) {
    this.points = points
  }

  changeSetWind(wind: string) {
    this.setWind = wind
  }

  addDraw(tile: string) {
    this.draw = tile
  }

  clearDraw() {
    this.draw = ''
  }

  doRiichi() {
    this.riichi = true
  }

  addHand(tiles: string[]) {
    const ts = this.hand.concat(tiles)
    this.hand = sortTiles(ts)
  }

  removeHand(indexs: number[]) {
    for (const i of indexs) {
      this.hand.splice(i, 1)
    }
  }

  removeHandByTiles(tiles: string[]) {
    for (const t of tiles) {
      const index = this.hand.findIndex(h => h === t)
      this.hand.splice(index, 1)
    }
  }

  addRiver(tile: River) {
    this.river.push(tile)
  }

  removeRiver() {
    return this.river.pop()
  }

  addMeld(meld: Meld) {
    this.meld.push(meld)
  }

  drawATile(tiles: string[]) {
    const [rests, picks] = getRandomTiles(1, tiles)
    this.addDraw(picks[0])
    // console.log(`player${this.setWind}: draw a tile, ${picks[0]}`)
    return rests
  }

  tegiri(tile: string, index: number) {
    this.removeHand([index])
    this.addHand([this.draw])
    this.addRiver({ type: 'tegiri', tile })
    this.clearDraw()
    // console.log(`player${this.setWind}: tegriri, ${tile}`)
  }

  tsumogiri(tile: string) {
    this.addRiver({ type: 'tsumogiri', tile })
    this.clearDraw()
    // console.log(`player${this.setWind}: tsumogiri, ${tile}`)
  }

  naku(type: MeldType, tiles: string[], index: number) {
    this.addMeld({ type, tiles, index })
    const localTiles = [...tiles]
    localTiles.splice(index, 1)
    this.removeHandByTiles(localTiles)
    // console.log(`player${this.setWind}: ${type}`)
  }

  isWin(tile: string) {
    const tiles = this.hand.concat(tile)
    const result: RongType[] = []

    const ts = [...tiles.map(t => (/0[msp]/.test(t) ? `5${t[1]}` : t))]

    const jantou = getDuplicates(ts)

    if (jantou.length <= 0) return result
    if (new Set(jantou).size === 7) result.push({ type: 'qidui', fan: 2 })

    // 先固定雀头，再计算顺子和刻子，因为雀头必须
    for (let j of jantou) {
      const rest = removeElements(ts, j, 2)
      // 先顺子后刻子，比番数大小
      const chows = getMJChows(rest)
      if (chows.length > 0) {
        for (let c of chows) {
          const rest2 = [...rest]
          c.forEach(cc => rest2.splice(rest2.indexOf(cc), 1))
          const pungs = getDuplicates(rest2, 3)
          if (chows.length + pungs.length === 4) {
            result.push({ type: 'wuyi', fan: 0 })
          }
        }
      } else {
        const pungs = getDuplicates(rest, 3)
        if (pungs.length === 4) {
          result.push({ type: 'sianke', fan: '役满' })
        }
      }
      // 先刻字后顺子，比番数大小
      const pungs = getDuplicates(rest, 3)
      if (pungs.length > 0) {
        for (let p of pungs) {
          const rest2 = removeElements(rest, p, 3)
          const chows = getMJChows(rest2)
          if (chows.length + pungs.length === 4) {
            result.push({ type: 'wuyi', fan: 0 })
          }
        }
      } else {
        const chows = getMJChows(rest)
        if (chows.length === 4) {
          result.push({ type: 'pinghu', fan: 1 })
        }
      }
    }

    if (!isEmpty(result)) {
      window.alert(`${this.setWind} 和！`)
    }
  }
}
