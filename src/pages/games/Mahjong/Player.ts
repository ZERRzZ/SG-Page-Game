export class Player {
  points: number
  setWind: string
  newCard: string
  handCards: string[]
  disCards: string[]

  constructor(
    setWind: string,
    points: number,
    newCard = '',
    handCards = [] as string[],
    disCards = [] as string[],
  ) {
    this.points = points
    this.setWind = setWind
    this.newCard = newCard
    this.handCards = handCards
    this.disCards = disCards
  }

  addNewCard(card: string) {
    this.newCard = card
  }

  removeNewCard() {
    this.newCard = ''
  }

  addHandCards(cards: string[]) {
    const cs = [...this.handCards, ...cards]
    this.handCards = this.sortCards(cs)
  }

  removeHandCards(indexs: number[]) {
    for (const i of indexs) {
      this.handCards.splice(i, 1)
    }
  }

  addDisCard(card: string) {
    this.disCards.push(card)
  }

  removeLastDisCard() {
    this.disCards.pop()
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
