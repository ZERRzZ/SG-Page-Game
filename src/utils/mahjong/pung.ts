export const pung = (hand: string[], tile: string) => {
  const pungs: string[][] = []

  const n = tile[0] === '0' ? '5' : tile[0]
  const t = tile[1]
  const h = hand.filter(hh => hh.includes(t)).join('')

  const reg = new RegExp(/[05]/.test(n) ? `[05]` : n, 'g')

  const matchs = h.match(reg)

  if (!matchs || matchs.length <= 1) return []
  else {
    matchs.includes('0')
      ? pungs.push([`0${t}`, `5${t}`], [`5${t}`, `5${t}`])
      : pungs.push([`${matchs[0]}${t}`, `${matchs[0]}${t}`])
  }

  return pungs
}
