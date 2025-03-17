import type { Meld, MeldType, River } from '@/types/specific/Mahjong'
import { sortTiles } from './sortTiles'
import { getChows } from '../common/getChows'
import { getRandomTiles } from './getRandomTiles'
import { getDuplicates } from '../common/getDuplicates'
import { removeElements } from '../common/removeElements'

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

  isWin(tiles: string[]) {
    const calChowNum = (tiles: string[]) => {
      if (!tiles) return []
      const ms = tiles.filter(t => t.includes('m')).map(v => parseInt(v))
      const ss = tiles.filter(t => t.includes('s')).map(v => parseInt(v))
      const ps = tiles.filter(t => t.includes('p')).map(v => parseInt(v))
      console.log(getChows(ms), 'ms')
      console.log(getChows(ss), 'ss')
      console.log(getChows(ps), 'ps')
    }
    console.log(`origin tiles: ${tiles}`)
    const ts = [...tiles.map(t => (/0[msp]/.test(t) ? `5${t[1]}` : t))]

    const jantou = getDuplicates(ts)

    if (jantou.length <= 0) return false
    if (new Set(jantou).size === 7) return 'qi dui'

    const chow: string[][] = []
    const pung: string[][] = []
    // 固定雀头，计算顺子和刻子，因为雀头必须
    for (let j of jantou) {
      const rest = removeElements(ts, j, 2)
      const pung = getDuplicates(rest, 3)
      // 再固定刻子，计算顺子，刻子非必须，需要考虑不将其看作是顺子的情况
      if (pung.length > 0) {
        for (let p of pung) {
          const rest2 = removeElements(rest, p, 3)
          console.log(`jt: ${[j, j]}`)
          console.log(`pung: ${pung}`)
          console.log(`rest: ${rest2}`)
          calChowNum(rest2)
        }
      } else {
        console.log(`jt: ${[j, j]}`)
        console.log(`rest: ${rest}`)
        calChowNum(rest)
      }
    }
  }
}
