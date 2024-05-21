import { useCallback, useEffect, useRef, useState } from "react"
import { TypingState } from "."

export const useCount = (init: number, setState: React.Dispatch<React.SetStateAction<TypingState>>) => {

  const [count, setCount] = useState(init)

  const intervalRef = useRef<NodeJS.Timeout>()

  const startCount = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCount(c => c - 1)
      // console.log('typing interval running...')
    }, 1000)
  }, [])

  const resetCount = useCallback(() => {
    setCount(init)
    intervalRef.current && clearInterval(intervalRef.current)
  }, [])

  const pauseCount = useCallback(() => {
    intervalRef.current && clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    if (count <= 0 && intervalRef.current) {
      clearInterval(intervalRef.current)
      setState('finish')
    }
  }, [count])

  // 离开组件时销毁定时器
  useEffect(() => {
    return () => {
      intervalRef.current && clearInterval(intervalRef.current)
    }
  }, [])

  return { count, startCount, resetCount, pauseCount }

}