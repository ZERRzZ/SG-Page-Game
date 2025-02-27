import { useState } from 'react'

import './index.css'
import Icon from '@/components/Icon'
import { TypingMode } from '@/types/Typing';

interface IProps {
  showTip: boolean
  tMode: TypingMode
  changeInit: (key: string, value: any) => void
}

export default function Set({ showTip, tMode, changeInit }: IProps) {

  const [open, setOpen] = useState(false)

  const mode = ['快速', '适中', '持久']

  return (
    <div className="t-set">
      <div className="ts-icon" onClick={() => setOpen(!open)}>
        <Icon type='icon-setting' />
      </div>
      {
        open ?
          <div className='t-pop'>
            <div>
              <span>是否显示提示</span>
              <input type="checkbox" checked={showTip} onChange={() => changeInit('typingShowTip', !showTip)} />
            </div>
            <div>
              <span>模式</span>
              <span className='tp-btns'>
                {
                  mode.map((v, i) => (
                    <div
                      key={i}
                      className={tMode === v ? 'active' : ''}
                      onClick={() => changeInit('typingMode', v)}
                    >
                      {v}
                    </div>
                  ))
                }
              </span>
            </div>
          </div>
          :
          ''
      }
    </div>
  )

}