import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

import './index.css'

export default function Nav() {

  const navigate = useNavigate()

  const goBack = () => {
    navigate('../')
  }

  return (
    <nav>
      <Button className='nav-btn' onClick={goBack}>返回</Button>
    </nav>
  )

}