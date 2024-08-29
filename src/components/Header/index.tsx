import { Link, useLocation } from 'react-router-dom'
import './index.css'

export default function Header() {

  const location = useLocation()
  
  return (
    <header>
      <h1>SG Page Game</h1>
      <div className='head-nav'>
        <Link className={location.pathname.includes('games') ? 'active' : ''} to='games'>游玩</Link>
        <Link className={location.pathname.includes('guides') ? 'active' : ''} to='guides'>攻略</Link>
      </div>
    </header>
  )

}