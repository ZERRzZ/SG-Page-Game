import './index.css'

export interface IProps {
  className?: string
  type?: string
  size?: string
  color?: string
  onClick?: React.MouseEventHandler<SVGSVGElement>
}

export default function Icon({
  className = '',
  type,
  size = '1em',
  color,
  onClick,
}: IProps) {
  return (
    <svg
      className={`${className} icon`}
      aria-hidden="true"
      fontSize={size}
      color={color}
      onClick={onClick}
    >
      <use xlinkHref={`#${type}`}></use>
    </svg>
  )
}
