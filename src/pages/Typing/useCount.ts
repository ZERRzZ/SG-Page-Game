import { useCallback, useEffect, useRef, useState } from "react"

export const useCount = (init: number, finish: () => void) => {

  const [count, setCount] = useState(init)

  const intervalRef = useRef<NodeJS.Timeout>()

  const startCount = useCallback(() => {
    intervalRef.current = setInterval(() => {
      console.log('interval running...')
      setCount(c => {
        const r = c - 1
        if (r <= 0) {
          intervalRef.current && clearInterval(intervalRef.current)
          finish()
        }
        return r
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