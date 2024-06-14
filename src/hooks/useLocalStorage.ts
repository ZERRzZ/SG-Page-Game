import { useCallback, useState } from "react"

export const useLocalStorage = <T>(key: string, init?: T): [T, (value: T) => void] => {

  const initStore = JSON.parse(localStorage.getItem(key) || 'null')

  const [value, setValue] = useState<T>(initStore === null ? init : initStore)

  const changeValue = useCallback((value: T) => {
    setValue(value)
    localStorage.setItem(key, JSON.stringify(value))
  }, [])

  return [value, changeValue]

}