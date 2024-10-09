import './index.css'
import { TypingResult } from '@/types/Typing'
import IconFont from '@/components/IconFont'

interface IProps {
  rank: TypingResult[]
  clearRank: () => void
}

export default function Rank({ rank, clearRank }: IProps) {

  return (
    <div className="t-rank">
      <span className='tr-title'>
        <IconFont type='icon-rank' size='1.4em' />
      </span>
      <div className='tr-content'>
        <span>排名</span>
        <span>分数</span>
        <span>速度</span>
        <span>准确性</span>
        {
          rank?.map(r => (
            <>
              <span className='trc-rank'>
                {r.latest ? <div className='trc-new'><IconFont type='icon-new' size='1.6em' color='var(--theme-dark)' /></div> : ''}
                {r.id === 1 ? <IconFont type='icon-top' size='1.4em' /> : r.id}
              </span>
              <span>{r.rank}</span>
              <span>{r.speed}</span>
              <span>{r.accuracy}</span>
            </>
          ))
        }
      </div>
      <div className='t-clear' onClick={clearRank}>
        <IconFont type='icon-clear' size='1.2em' />
      </div>
    </div>
  )

}