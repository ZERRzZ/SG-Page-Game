import TileDisplay from '../TileDisplay'
import './index.css'
import { Meld } from '@/types/specific/Mahjong'

interface IProps {
  list: Meld[]
  meld: (l: Meld) => void
  notMeld: () => void
}

export default function MeldBar({ list, meld, notMeld }: IProps) {
  return (
    <div className="nagi-bar">
      {list.map((l, i) => (
        <div
          className="item"
          key={i}
          onClick={() => meld(l)}
        >
          <span>
            {l.type === 'chi' ? '吃' : l.type === 'pung' ? '碰' : '杠'}
          </span>
          <TileDisplay
            className="tiles"
            tiles={l.tiles}
          />
        </div>
      ))}
      <div
        className="item"
        onClick={notMeld}
      >
        取消
      </div>
    </div>
  )
}
