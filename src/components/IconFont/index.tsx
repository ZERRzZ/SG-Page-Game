import './index.css'

export interface IProps {
  type?: string
  size?: number | string
  color?: string
}

export default function IconFont({ type, size = '1em', color }: IProps) {

  return (
    <svg className="iconfont" aria-hidden="true" fontSize={size} color={color}>
      <use xlinkHref={`#${type}`}></use>
    </svg>
  )

}