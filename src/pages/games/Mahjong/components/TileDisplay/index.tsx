import './index.css'
import { River } from '../../type'
import Icon from '@/components/Icon'

interface IProps {
  className?: string
  tiles: string[] | River[]
  draw?: string
  tileClick?: (tile: string, index?: number) => void
}

export default function TileDisplay({
  className,
  tiles,
  draw,
  tileClick,
}: IProps) {
  return (
    <section className={className}>
      {tiles.map((t, i) =>
        typeof t === 'string' ? (
          <span className="card" key={i} onClick={() => tileClick?.(t, i)}>
            <Icon
              key={`${i}-${t}`}
              type={`icon-mahjong-${t}`}
              size="2em"
              color="#000"
            />
          </span>
        ) : (
          <span className={`card ${t?.type}`} key={i}>
            <Icon
              key={`${i}-${t?.tile}`}
              type={`icon-mahjong-${t?.tile}`}
              size="2em"
              color="#000"
            />
          </span>
        ),
      )}
      {draw && (
        <span className="card new-card" onClick={() => tileClick?.(draw)}>
          <Icon type={`icon-mahjong-${draw}`} size="2em" color="#000" />
        </span>
      )}
    </section>
  )
}
