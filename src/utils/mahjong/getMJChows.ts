import { getChows } from '../common/getChows'

export const getMJChows = (tiles: string[]) => {
  if (!tiles) return []
  const ms = tiles.filter(t => t.includes('m')).map(v => parseInt(v))
  const ss = tiles.filter(t => t.includes('s')).map(v => parseInt(v))
  const ps = tiles.filter(t => t.includes('p')).map(v => parseInt(v))
  const mc = getChows(ms).map(chow => chow.map(c => `${c}m`))
  const sc = getChows(ss).map(chow => chow.map(c => `${c}s`))
  const pc = getChows(ps).map(chow => chow.map(c => `${c}p`))
  return mc.concat(sc, pc)
}
