import './index.css'

export interface IProps {
  type?: string
  size?: number
  color?: string
}

export default function IconFont({ type, size = 100, color }: IProps) {

  return (
    <svg className="iconfont" aria-hidden="true" fontSize={size} color={color}>
      <use xlinkHref={`#${type}`}></use>
    </svg>
  )

}