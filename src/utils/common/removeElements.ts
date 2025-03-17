/**
 * 删除数组中指定元素 n 次
 * @param arr
 * @param el
 * @param n
 * @returns
 */
export const removeElements = <T>(arr: T[], el: T, n = 1) => {
  let count = 1
  return arr
    .map(v => (v === el && count++ <= n ? undefined : v))
    .filter(v => v !== undefined)
}
