import type { Meld, MeldType, River } from '@/types/specific/Mahjong'
import { sortTiles } from './sortTiles'
import { getRandomTiles } from './getRandomTiles'

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
    console.log(`player${this.setWind}: draw a tile, ${picks[0]}`)
    return rests
  }

  tegiri(tile: string, index: number) {
    this.removeHand([index])
    this.addHand([this.draw])
    this.addRiver({ type: 'tegiri', tile })
    this.clearDraw()
    console.log(`player${this.setWind}: tegriri, ${tile}`)
  }

  tsumogiri(tile: string) {
    this.addRiver({ type: 'tsumogiri', tile })
    this.clearDraw()
    console.log(`player${this.setWind}: tsumogiri, ${tile}`)
  }

  naku(type: MeldType, tiles: string[], index: number) {
    this.addMeld({ type, tiles, index })
    const localTiles = [...tiles]
    localTiles.splice(index, 1)
    this.removeHandByTiles(localTiles)
    console.log(`player${this.setWind}: ${type}`)
  }
}
