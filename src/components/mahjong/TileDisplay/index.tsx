import './index.css'
import type { Meld, River } from '@/types/specific/Mahjong'
import Icon from '@/components/common/Icon'

interface IProps {
  className?: string
  tiles: string[] | River[] | Meld[]
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
          <span
            className="card"
            key={i}
            onClick={() => tileClick?.(t, i)}
          >
            <Icon
              key={`${i}-${t}`}
              type={`i-mahjong-${t}`}
              size="2em"
              color="#000"
            />
          </span>
        ) : t && 'tile' in t ? (
          <span
            className={`card ${t?.type}`}
            key={i}
          >
            <Icon
              key={`${i}-${t?.tile}`}
              type={`i-mahjong-${t?.tile}`}
              size="2em"
              color="#000"
            />
          </span>
        ) : (
          <div
            className="single-melds"
            key={i}
          >
            {t?.tiles.map((tt, ii) => (
              <span
                key={ii}
                className={`card ${ii === t.index ? 'special' : ''}`}
              >
                <Icon
                  key={`${i}-${tt}`}
                  type={`i-mahjong-${tt}`}
                  size="2em"
                  color="#000"
                />
              </span>
            ))}
          </div>
        ),
      )}
      {draw && (
        <span
          className="card new-card"
          onClick={() => tileClick?.(draw)}
        >
          <Icon
            type={`i-mahjong-${draw}`}
            size="2em"
            color="#000"
          />
        </span>
      )}
    </section>
  )
}
