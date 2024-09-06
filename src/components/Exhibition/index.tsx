import { Link } from 'react-router-dom'

import './index.css'
import IconFont from '../IconFont'
import { MyRoute } from '@/types/MyRoute'

interface IProps {
  list: MyRoute[]
}

export default function Exhibition({ list }: IProps) {

  return (
    <div className='exhibition'>
      {
        list.map(v =>
          <Link className='exhibition-item' key={v.extra?.id} to={v.path || ''}>
            <IconFont type={v.extra?.icon} size={120} />
            <span className='ei-name'>{v.extra?.name}</span>
          </Link>
        )
      }
    </div>
  )

}