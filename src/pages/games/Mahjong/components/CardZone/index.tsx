import './index.css'
import Icon from '@/components/Icon'

interface IProps {
  className?: string
  cards: string[]
  handleCardClick?: (card: string, index: number) => void
}

export default function CardZone({
  className,
  cards,
  handleCardClick
}: IProps) {
  return (
    <section className={className}>
      {cards.map((c, i) => (
        <span className="card" key={i} onClick={() => handleCardClick?.(c, i)}>
          <Icon
            key={`${i}-${c}`}
            type={`icon-mahjong-${c}`}
            size="2em"
            color="#000"
          />
        </span>
      ))}
    </section>
  )
}
