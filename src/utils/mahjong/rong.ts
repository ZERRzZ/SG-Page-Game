import type { FinalHand } from '@/types/specific/Mahjong'
import { getDuplicates } from '../common/getDuplicates'
import { removeElements } from '../common/removeElements'
import { getMJChows } from './getMJChows'

/**
 * 判断麻将是否胡牌
 * @param arr - 手牌数组
 * @returns 胡牌的组合结果
 */
export const rong = (arr: string[]) => {
  const finalHand: FinalHand[] = [] // 和牌时手牌形状

  // 将 '0' 替换为 '5'，方便处理
  const tiles = arr.map(t => t.replace('0', '5'))

  if (isThirteenOrphans(tiles)) {
    finalHand.push({ jantou: [], chows: [], pungs: [], tiles })
  }

  // 获取雀头（对子）
  const jantou = getDuplicates(tiles)

  if (jantou.length <= 0) {
    return finalHand // 没有雀头，直接返回
  }

  // 判断七对
  if (new Set(jantou).size === 7) {
    finalHand.push({ jantou, chows: [], pungs: [], tiles })
  }

  // 遍历每个雀头，尝试组合顺子和刻子
  for (const j of jantou) {
    const rest = removeElements(tiles, j, 2)

    // 尝试两种顺序：先顺子后刻子，先刻子后顺子
    const r1 = checkCombination(rest, true) // 先顺子后刻子
    const r2 = checkCombination(rest, false) // 先刻子后顺子

    r1 &&
      finalHand.push({ jantou: [j], chows: r1.chows, pungs: r1.pungs, tiles })
    r2 &&
      finalHand.push({ jantou: [j], chows: r2.chows, pungs: r2.pungs, tiles })
  }

  finalHand.length && console.log(finalHand)
  return finalHand
}

/**
 * 检查顺子和刻子的组合
 * @param rest - 剩余牌
 * @param jantou - 当前雀头
 * @param finalHand - 最终胡牌结果
 * @param prioritizeChows - 是否优先处理顺子
 */
const checkCombination = (rest: string[], prioritizeChows: boolean) => {
  let chows: string[][] = []
  let pungs: string[] = []

  if (prioritizeChows) {
    chows = getMJChows(rest)
    if (chows.length > 0) {
      const rest2 = [...rest]
      chows.forEach(chow =>
        chow.forEach(c => rest2.splice(rest2.indexOf(c), 1)),
      )
      pungs = getDuplicates(rest2, 3)
    }
  } else {
    pungs = getDuplicates(rest, 3)
    if (pungs.length > 0) {
      let rest2 = [...rest]
      pungs.forEach(p => (rest2 = removeElements(rest2, p, 3)))
      chows = getMJChows(rest2)
    }
  }

  if (chows.length + pungs.length === 4) {
    return { chows, pungs }
  }

  return undefined
}

/**
 * 判断是否为国士无双（十三幺）
 * @param tiles - 手牌数组
 * @returns 是否为国士无双
 */
const isThirteenOrphans = (tiles: string[]): boolean => {
  const requiredTiles = [
    '1m',
    '9m',
    '1p',
    '9p',
    '1s',
    '9s',
    '1z',
    '2z',
    '3z',
    '4z',
    '5z',
    '6z',
    '7z',
  ]
  const uniqueTiles = Array.from(new Set(tiles))
  return (
    requiredTiles.every(tile => uniqueTiles.includes(tile)) &&
    tiles.some(tile => tiles.filter(t => t === tile).length === 2)
  )
}
