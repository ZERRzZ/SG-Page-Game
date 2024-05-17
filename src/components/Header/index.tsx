import './index.css'
import logo from '@/assets/imgs/logo.png'

export default function Header() {

  return (
    <header>
      <img src={logo} alt="图片倒了!" width={80} height={80} />
      <div className='header-title'>SG Page Game</div>
    </header>
  )

}