import './index.css'

export default function Exhibition() {

  const exhibitions = [
    { id: 1, name: 'touhou', description: '一个打飞机游戏却有成为东方那样的野心' }
  ]

  return (
    <>
      {
        exhibitions.map(e => 
          <div>
            <img src="" alt="图片不见了" />
            <span>{e.name}</span>
          </div>
        )
      }
    </>
  )

}