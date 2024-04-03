import { Link } from 'react-router-dom'

import './index.css'
import logo from '@/assets/imgs/logo.png'

export default function Exhibition() {

  const exhibitions = [
    { id: 1, name: 'touhou', path: 'touhou', description: '一个打飞机游戏却有成为东方那样的野心' },
    { id: 2, name: 'Greedy Snake', path: 'greedy-snake', description: '贪吃蛇小游戏' },
  ]

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