import { Button } from 'antd'

import './index.css'

export default function GreedySnake() {

  return (
    <div className='greedy-snake'>
      <div className="gs-btns">
        <Button className='gs-btn'>开始</Button>
        <Button className='gs-btn'>暂停</Button>
        <Button className='gs-btn'>结束</Button>
      </div>
      <div className="gs-map">

      </div>
    </div>
  )

}