import { useState } from 'react'

const useLocalStorage = <T>(key: string, init: T): [T, (value: T) => void] => {
  // 初始值，以已有为优先
  const INIT = JSON.parse(localStorage.getItem(key) || 'null')
  const [value, setValue] = useState<T>(INIT === null ? init : INIT)

  INIT === null && localStorage.setItem(key, JSON.stringify(value))

  const changeValue = (value: T) => {
    setValue(value)
    localStorage.setItem(key, JSON.stringify(value))
  }

  return [value, changeValue]
}

export default useLocalStorage
