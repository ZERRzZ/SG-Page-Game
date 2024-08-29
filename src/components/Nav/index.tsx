import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

import './index.css'
import IconFont from '../IconFont'

export default function Nav() {

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <nav>
      <Button className='nav-btn' onClick={goBack} icon={<IconFont type='icon-fanhui' />}>返回</Button>
    </nav>
  )

}