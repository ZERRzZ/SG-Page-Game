import { useCallback, useState } from "react"

export const useLocalStorage = <T>(key: string): [T, (value: T) => void] => {

  const [value, setValue] = useState<T>(JSON.parse(localStorage.getItem(key) || 'null'))

  const changeValue = useCallback((value: T) => {
    setValue(value)
    localStorage.setItem(key, JSON.stringify(value))
  }, [])

  return [value, changeValue]

}