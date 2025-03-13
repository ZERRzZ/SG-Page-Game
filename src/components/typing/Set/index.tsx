import { useEffect, useRef, useState } from 'react'

import './index.css'
import Icon from '@/components/common/Icon'
import { Mode } from '@/types/specific/Typing'
import { totalMode } from '@/hooks/typing/useInit'

interface IProps {
  mode: Mode
  changeMode: (mode: Mode) => void
}

export default function Set({ mode, changeMode }: IProps) {
  const pop = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  const toggle = () => {
    if (pop.current) {
      pop.current.style.setProperty('animation', 'uphide 0.3s')
      setTimeout(() => setOpen(false), 250)
    } else {
      setOpen(true)
    }
  }

  useEffect(() => {
    open && document.addEventListener('click', toggle)
    return () => document.removeEventListener('click', toggle)
  }, [open])

  return (
    <div
      className="t-set"
      onClick={e => e.stopPropagation()}
    >
      <div
        className="ts-icon"
        onClick={toggle}
      >
        <Icon type="i-common-setting" />
      </div>
      {open ? (
        <div
          ref={pop}
          className="t-pop"
        >
          <div>
            <span>模式</span>
            <span className="tp-btns">
              {Array.from(totalMode.keys()).map((v, i) => (
                <div
                  key={i}
                  className={mode === v ? 'active' : ''}
                  onClick={() => changeMode(v)}
                >
                  {v}
                </div>
              ))}
            </span>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
