/**
 * 找出数组中指定重复次数的元素
 * @param arr
 * @param count 次数
 * @returns
 */
export const getDuplicates = (arr: any[], count = 2) => {
  const countMap: Record<any, any> = {} // 用于统计每个数字的出现次数
  const duplicates = [] // 存储结果

  // 遍历数组，统计次数
  for (const num of arr) {
    if (countMap[num] !== undefined) {
      countMap[num]++
    } else {
      countMap[num] = 1
    }
  }

  // 筛选出现次数≥count的数字
  for (const num in countMap) {
    if (countMap[num] >= count) {
      duplicates.push(num)
    }
  }

  return duplicates
}
