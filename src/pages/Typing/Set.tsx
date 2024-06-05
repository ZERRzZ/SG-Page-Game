import { Popover } from 'antd'

import './Set.css'
import IconFont from '@/components/IconFont'

export default function Set() {

  const content = (
    <div>
      <span></span>
    </div>
  )

  return (
    <>
      <Popover content={content} title="设置" trigger="click" placement='bottom'>
        <span className='t-set'>
          <IconFont type='icon-shezhi' />
        </span>
      </Popover>
    </>
  )

}