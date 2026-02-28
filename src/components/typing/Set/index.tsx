import { useEffect, useRef, useState } from 'react'

import './index.css'
import { wait } from '@/utils/common/wait'
import Icon from '@/components/common/Icon'
import { Mode } from '@/types/specific/Typing'
import { isEmpty } from '@/utils/common/isEmpty'
import { TYPING_MODES } from '@/constants/typingConfig'

interface IProps {
  mode: Mode
  changeMode: (mode: Mode) => void
}

export default function Set({ mode, changeMode }: IProps) {
  const pop = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  const toggle = () => {
    if (isEmpty(pop.current)) {
      return setOpen(true)
    }
    pop.current!.style.setProperty('animation', 'uphide 0.3s')
    wait(250).then(() => setOpen(false))
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
      {open && (
        <div
          ref={pop}
          className="t-pop"
        >
          <div>
            <span>模式</span>
            <span className="tp-btns">
              {Array.from(TYPING_MODES.keys()).map((v, i) => (
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
      )}
    </div>
  )
}
