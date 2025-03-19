import { quickSort } from '@/utils/common/quickSort'

export const sortTiles = (tiles: string[]) => {
  const [ms, ps, ss, zs] = [[], [], [], []] as string[][]
  for (const t of tiles) {
    if (/m$/.test(t)) ms.push(t)
    else if (/p$/.test(t)) ps.push(t)
    else if (/s$/.test(t)) ss.push(t)
    else if (/z$/.test(t)) zs.push(t)
  }
  quickSort(ms, 0, ms.length - 1)
  quickSort(ps, 0, ps.length - 1)
  quickSort(ss, 0, ss.length - 1)
  quickSort(zs, 0, zs.length - 1)
  for (const v of [ms, ps, ss]) {
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
