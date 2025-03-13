import { River } from './type'
import { quickSort } from '@/utils/quickSort'

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

  constructor(p: Partial<Player>) {
    this.points = p.points || 25000
    this.setWind = p.setWind || '东'
    this.draw = p.draw || ''
    this.riichi = p.riichi || false
    this.hand = Array.from(p.hand || [])
    this.river = Array.from(p.river || [])
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
    this.hand = this.sortTiles(ts)
  }

  removeHand(indexs: number[]) {
    for (const i of indexs) {
      this.hand.splice(i, 1)
    }
  }

  addRiver(tile: River) {
    this.river.push(tile)
  }

  removeRiver() {
    this.river.pop()
  }

  tegiri(tile: string, index: number) {
    this.removeHand([index])
    this.addHand([this.draw])
    this.addRiver({ type: 'tegiri', tile })
    this.clearDraw()
  }

  tsumogiri(tile: string) {
    this.addRiver({ type: 'tsumogiri', tile })
    this.clearDraw()
  }

  sortTiles = (tiles: string[]) => {
    const [ms, ps, ss, zs] = [[], [], [], []] as string[][]
    for (let t of tiles) {
      if (/m$/.test(t)) ms.push(t)
      else if (/p$/.test(t)) ps.push(t)
      else if (/s$/.test(t)) ss.push(t)
      else if (/z$/.test(t)) zs.push(t)
    }
    quickSort(ms, 0, ms.length - 1)
    quickSort(ps, 0, ps.length - 1)
    quickSort(ss, 0, ss.length - 1)
    quickSort(zs, 0, zs.length - 1)
    for (let v of [ms, ps, ss]) {
      if (!v[0] || !/^0/.test(v[0])) continue
      const dora = v.shift()
      let index = 0
      while (v[index] < '5') {
        index++
      }
      dora && v.splice(index, 0, dora)
    }
    return ms.concat(ps, ss, zs)
  }
}
