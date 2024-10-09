import { Button, Table } from 'antd'

import './index.css'
import { TypingResult } from '@/types/Typing'

interface IProps {
  rank: TypingResult[]
  clearRank: () => void
}

export default function Rank({ rank, clearRank }: IProps) {

  const rankColumns = [
    { title: '分数', dataIndex: 'rank', key: 'rank', align: 'center' as 'center' },
    { title: '速度', dataIndex: 'speed', key: 'speed', align: 'center' as 'center' },
    { title: '准确性', dataIndex: 'accuracy', key: 'accuracy', align: 'center' as 'center' }
  ]

  return (
    <div className="t-rank">
      <span className='tr-1'>排名</span>
      <Table
        rowKey='id'
        className='tr-table'
        rowClassName={r => r.latest ? 'tr-new-tr' : ''}
        columns={rankColumns}
        dataSource={rank}
        pagination={false}
      />
      <Button onClick={clearRank}>清空排名</Button>
    </div>
  )

}