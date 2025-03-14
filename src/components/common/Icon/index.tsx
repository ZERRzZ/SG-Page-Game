import './index.css'

export interface IProps {
  type?: string
  size?: string
  color?: string
}

export default function Icon({ type, size = '1em', color }: IProps) {
  return (
    <svg
      className="icon"
      aria-hidden="true"
      fontSize={size}
      color={color}
    >
      <use xlinkHref={`#${type}`}></use>
    </svg>
  )
}
