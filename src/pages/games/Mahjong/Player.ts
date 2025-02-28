import { River } from './type'

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
    this.hand = this.sortCards(ts)
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

  sortCards = (cards: string[]) => {
    const ms = cards.filter(v => v.endsWith('m')).sort()
    const ps = cards.filter(v => v.endsWith('p')).sort()
    const ss = cards.filter(v => v.endsWith('s')).sort()
    const zs = cards.filter(v => v.endsWith('z')).sort()
    ;[ms, ps, ss].forEach((v: string[]) => {
      if (!v[0] || v[0].search(/0[mps]/) === -1) return
      const dora = v.shift()
      let index = 0
      while (v[index] < '5') {
        index++
      }
      dora && v.splice(index, 0, dora)
    })
    return [...ms, ...ps, ...ss, ...zs]
  }
}
