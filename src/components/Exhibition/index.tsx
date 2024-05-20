import { Link } from 'react-router-dom'

import './index.css'
import logo from '@/assets/imgs/logo.png'
import exhibitions from '@/assets/jsons/exhibitions.json'

export default function Exhibition() {

  return (
    <div className='exhibition'>
      {
        exhibitions.map(v =>
          <Link className='exhibition-item' key={v.id} to={v.path}>
            <img className='e-i-img' src={logo} alt="图片不见了" />
            <span className='e-i-name'>{v.name}</span>
          </Link>
        )
      }
    </div>
  )

}