import { Link } from 'react-router-dom'

import './index.css'
import exhibitions from '@/assets/jsons/exhibitions.json'
import IconFont from '../IconFont'

export default function Exhibition() {

  return (
    <div className='exhibition'>
      {
        exhibitions.map(v =>
          <Link className='exhibition-item' key={v.id} to={v.path}>
            <IconFont type={v.icon} size={120} />
            <span className='ei-name'>{v.name}</span>
          </Link>
        )
      }
    </div>
  )

}