/**
 * 节流函数
 * @param fn 函数
 * @param delay 节流时间
 */
export const throttle = (fn: (...args: any[]) => void, delay: number) => {
  let timer: NodeJS.Timeout | undefined

  return (...args: any[]) => {
    if (timer) return
    timer = setTimeout(() => {
      fn(...args)
      clearTimeout(timer)
      timer = undefined
    }, delay)
  }
}
