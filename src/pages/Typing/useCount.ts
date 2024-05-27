import { useCallback, useEffect, useRef, useState } from "react"

export const useCount = (init: number, finish: () => void) => {

  const [count, setCount] = useState(init)

  const intervalRef = useRef<NodeJS.Timeout>()

  const startCount = useCallback(() => {
    intervalRef.current = setInterval(() => {
      console.log('interval running...')
      setCount(c => {
        if (c <= 0) {
          intervalRef.current && clearInterval(intervalRef.current)
          finish()
          return c
        }
        return c - 1
      })
    }, 1000)
  }, [])

  const resetCount = useCallback(() => {
    setCount(init)
    intervalRef.current && clearInterval(intervalRef.current)
  }, [])

  const pauseCount = useCallback(() => {
    intervalRef.current && clearInterval(intervalRef.current)
  }, [])

  // 离开组件时销毁定时器
  useEffect(() => {
    return () => {
      intervalRef.current && clearInterval(intervalRef.current)
    }
  }, [])

  return { count, startCount, resetCount, pauseCount }

}