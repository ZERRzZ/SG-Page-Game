export const randomId = (num = 32, arr = [7, 11, 15, 19]) => {

  const hexDigits = "0123456789abcdef"

  let id = ""

  for (let i = 0; i < num; i++) {

    id += hexDigits[(Math.floor(Math.random() * 16))]

    if (arr.includes(i)) {
      id += "-"
    }

  }

  return id

}