/**
 * 随机 ID
 * @param num 随机 ID 位数
 */
export const randomId = (num = 32) => {
  // 16进制数
  const hexDigits = '0123456789abcdef'

  let id = ''

  for (let i = 0; i < num; i++) {
    id += hexDigits[Math.floor(Math.random() * hexDigits.length)]
  }

  return id
}
