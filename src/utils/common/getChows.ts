import { isEmpty } from '../common/isEmpty'
import { removeElements } from '../common/removeElements'

/**
 * 找出数组中的所有顺子
 * @param arr
 * @param flex 弹性度，即几连顺
 * @returns
 */
export const getAllChows = (arr: number[], flex = 1) => {
  const countMap: Record<any, any> = {} // 用于统计每个数字的出现次数
  const chows = [] // 存储结果
  const range = flex * 2 + 1 // 有效区间

  // 遍历数组，统计次数
  for (const num of arr) {
    countMap[num] = 1
    arr.includes(num - flex) && countMap[num]++
    arr.includes(num + flex) && countMap[num]++
  }

  // 筛选出现次数≥count的数字
  for (const num in countMap) {
    if (countMap[num] >= range) {
      chows.push(
        Array.from({ length: range }).map(
          (_, i) => Number(num) + (i - range / 2),
        ),
      )
    }
  }

  return chows
}

/**
 * 找出数字中的顺子
 * @param nums
 * @param count
 * @returns
 */
export const getChows = (nums: number[], count = 0, chows: number[][] = []) => {
  const res = getAllChows(nums)
  if (isEmpty(res)) {
    return [count, chows]
  } else {
    const obj: Record<number, number[][]> = {}
    for (let r of res) {
      let arr = [...nums]
      r.forEach(rr => (arr = removeElements(arr, rr)))
      // const [n, r] = chows(rest, count + 1, result.concat(res))
      // obj[n] = r
    }
    const max = Math.max(...Object.keys(obj).map(k => parseInt(k)))
    return [max, obj[max]]
  }
}
