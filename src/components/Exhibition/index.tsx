import { Link } from 'react-router-dom'

import './index.css'
import IconFont from '../IconFont'
import { ExhibitionItem } from '@/types/Exhibition'

interface IProps {
  list: ExhibitionItem[]
}

export default function Exhibition({ list }: IProps) {

  return (
    <div className='exhibition'>
      {
        list.map(v =>
          <Link className='exhibition-item' key={v.id} to={v.path}>
            <IconFont type={v.icon} size={120} />
            <span className='ei-name'>{v.name}</span>
          </Link>
        )
      }
    </div>
  )

}