import { useEffect, useRef, useState } from 'react'
import { faker } from '@faker-js/faker'

import './index.css'
import IconFont from '@/components/IconFont'

export default function Typing() {

  const [count, setCount] = useState(30)
  const [section, setSection] = useState(faker.word.words(20))

  const timerRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (!count) {
      timerRef.current && clearInterval(timerRef.current)
    }
    return () => {
      timerRef.current && clearInterval(timerRef.current)
    }
  }, [count])

  useEffect(() => {
    document.addEventListener('keyup', e => {
      if (e.code !== 'Enter') return
      
    })
  }, [])

  function start() {
    timerRef.current = setInterval(() => {
      setCount(c => c - 1)
    }, 1000)
  }

  function reset() {
    timerRef.current && clearInterval(timerRef.current)
    setCount(30)
    setSection(faker.word.words(20))
  }

  return (
    <div className='typing'>
      <span className="t-count">倒计时：{count}</span>
      <div className="t-section">{section}</div>
      <div className='t-reset' onClick={reset}>
        <IconFont type='icon-zhongzhi' color='inherit' />
      </div>
      <div className="t-results">
        <span>结果</span>
        <span>准确性：95%</span>
        <span>错误：1</span>
        <span>输入：22</span>
      </div>
    </div>
  )

}