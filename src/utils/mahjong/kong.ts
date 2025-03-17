export const kong = (hand: string[], tile: string) => {
  const n = tile[0] === '0' ? '5' : tile[0]
  const t = tile[1]
  const h = hand.filter(hh => hh.includes(t)).join('')

  const reg = new RegExp(/[05]/.test(n) ? `[05]` : n, 'g')

  const matchs = h.match(reg)

  if (!matchs || matchs.length <= 2) return []
  else return matchs.map(m => `${m}${t}`)
}
