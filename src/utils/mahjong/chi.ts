export const chi = (hand: string[], tile: string) => {
  const chis: number[][] = []

  const n = Number(tile[0]) === 0 ? 5 : Number(tile[0])
  const t = tile[1]

  if (t === 'z') return []

  const h = hand.filter(h => h.includes(t)).map(h => Number(h[0]))

  const check = (n1: number, n2: number) =>
    h.includes(n1) && h.includes(n2) && [n1, n2]

  const deal = (n1: number, n2: number) => {
    const r: (false | number[])[] = []
    if (n1 <= 0 || n2 <= 0) return r as number[][]
    r.push(n1 === 5 && check(0, n2))
    r.push(n2 === 5 && check(n1, 0))
    r.push(check(n1, n2))
    return r.filter(rr => rr !== false)
  }

  chis.push(...deal(n - 2, n - 1))
  chis.push(...deal(n - 1, n + 1))
  chis.push(...deal(n + 1, n + 2))

  return chis.map(c => c.map(cc => `${cc}${t}`))
}
