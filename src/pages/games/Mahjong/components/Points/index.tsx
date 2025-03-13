import './index.css'
import { Player } from '@/utils/mahjong/player'

interface IProps {
  player: Player[]
}

export default function Points({ player }: IProps) {
  return (
    <div className="score">
      {player.map(p => (
        <div
          className="item"
          key={p.setWind}
        >
          <span>{p.setWind}</span>
          <span>{p.points}</span>
        </div>
      ))}
    </div>
  )
}
