import './index.css'

interface IProps {
  score: Map<string, number>
}

export default function Score({ score }: IProps) {
  const arr: string[] = ['', '东', '南', '西', '北']

  return (
    <div className="score">
      {[...score].map(([k, v]) => (
        <div className="item" key={k}>
          <span>{arr[Number(k)]}</span>
          <span>{v}</span>
        </div>
      ))}
    </div>
  )
}
