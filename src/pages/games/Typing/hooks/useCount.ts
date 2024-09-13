import { useCallback, useEffect, useRef, useState } from "react"

export const useCount = (init: number) => {

  const [count, setCount] = useState(init)

  const intervalRef = useRef<NodeJS.Timeout>()

  const startCount = useCallback(() => {
    intervalRef.current = setInterval(() => {
      // console.log('interval running...')
      setCount(c => c - 1)
    }, 1000)
  }, [])

  const resetCount = useCallback(() => {
    setCount(init)
    intervalRef.current && clearInterval(intervalRef.current)
  }, [init])

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