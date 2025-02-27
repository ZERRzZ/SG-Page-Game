import './index.css'
import { useInit } from './hooks/useInit'
import CardZone from './components/CardZone'
import { useRef } from 'react'
import Icon from '@/components/Icon'
import Score from './components/Score'

export default function Mahjong() {
  const {
    init,
    mahjong,
    setMahjong,
    trumpCard,
    setTrumpCard,
    dora,
    setDora,
    p1Card,
    setP1Card,
    p2Card,
    setP2Card,
    p3Card,
    setP3Card,
    p4Card,
    setP4Card,
    score,
    setScore,
    p1Discard,
    setP1Discard,
    p2Discard,
    setP2Discard,
    p3Discard,
    setP3Discard,
    p4Discard,
    setP4Discard
    // setPlayerCards
  } = useInit()

  const mahjongRef = useRef<HTMLDivElement>(null)

  const start = () => {
    init()
    dealing()
    getCard()
    // console.log(mahjong)
    if (mahjongRef.current) {
      mahjongRef.current.scrollTop = mahjongRef.current.clientHeight
    }
  }

  const back = () => {
    mahjongRef.current && (mahjongRef.current.scrollTop = 0)
  }

  const dealing = () => {
    setMahjong(mahjong => {
      const mj = [...mahjong]
      const trumpCard = getRandomElements(14, mj)
      const dora = trumpCard.splice(4, 1)
      const p1Card = getRandomElements(13, mj)
      const p2Card = getRandomElements(13, mj)
      const p3Card = getRandomElements(13, mj)
      const p4Card = getRandomElements(13, mj)
      setTrumpCard(trumpCard)
      setDora(dora)
      setP1Card(sortOut(p1Card))
      setP2Card(sortOut(p2Card))
      setP3Card(sortOut(p3Card))
      setP4Card(sortOut(p4Card))
      console.log(mj, 'after dealing')
      return mj
    })
    setScore(score => getRandomBanker(score))
  }

  const getCard = () => {
    setMahjong(mahjong => {
      const mj = [...mahjong]
      if (mj.length < 0) {
        gameEnd('流局')
        return mj
      }
      const card = getRandomElements(1, mj)[0]
      setScore(score => {
        const pre = [...score]
        // const key = `setP${pre[0][0]}Card` as keyof typeof setPlayerCards
        setP1Card(c => {
          const temp = [...c, card]
          console.log(temp)
          return temp
        })
        // setPlayerCards[key](c => {
        //   const temp = [...c, card]
        //   console.log(temp)
        //   return temp
        // })
        return score
      })
      return mj
    })
  }

  const playCard = (card: string, index: number) => {
    console.log(card, index)
  }

  const gameEnd = (type: string) => {
    alert(type)
  }

  const sortOut = (card: string[]) => {
    const ms = card.filter(v => v.endsWith('m')).sort()
    const ps = card.filter(v => v.endsWith('p')).sort()
    const ss = card.filter(v => v.endsWith('s')).sort()
    const zs = card.filter(v => v.endsWith('z')).sort()
    ;[ms, ps, ss].forEach((v: string[]) => {
      if (!v[0] || v[0].search(/0[mps]/) === -1) return
      const dora = v.shift()
      let index = 0
      while (v[index] < '5') {
        index++
      }
      dora && v.splice(index, 0, dora)
    })
    return [...ms, ...ps, ...ss, ...zs]
  }

  const getRandomElements = (length: number, arr: any[]) => {
    const result: string[] = []
    while (length-- > 0) {
      const index = Math.floor(Math.random() * arr.length)
      result.push(arr[index])
      arr.splice(index, 1)
    }
    return result
  }

  const getRandomBanker = (score: Map<string, number>) => {
    const keys = [...score.keys()]
    const result = new Map()
    let i = Math.floor(Math.random() * 96 + keys.length)
    const indexs = [1, 2, 3, 4].map(() => i++ % keys.length)
    indexs.forEach(i => result.set(keys[i], score.get(keys[i])))
    return result as Map<string, number>
  }

  return (
    <div ref={mahjongRef} className="mahjong">
      <div className="prepare">
        <div className="start" onClick={start}>
          <Icon type="icon-start" />
        </div>
      </div>
      <div className="playing">
        <div className="header">
          <div className="dora">
            <div>DORA</div>
            <CardZone cards={dora} />
          </div>
          <div className="back" onClick={back}>
            <Icon type="icon-back" />
          </div>
        </div>
        <div className="player">
          <Score score={score} />
          <div className="discard-zone">
            <CardZone className="discard p1" cards={p1Discard} />
            <CardZone className="discard p2" cards={p2Discard} />
            <CardZone className="discard p3" cards={p3Discard} />
            <CardZone className="discard p4" cards={p4Discard} />
          </div>
          <div className="player-zone">
            <CardZone
              className="player p1"
              cards={p1Card}
              handleCardClick={playCard}
            />
            <CardZone className="player p2" cards={p2Card} />
            <CardZone className="player p3" cards={p3Card} />
            <CardZone className="player p4" cards={p4Card} />
          </div>
        </div>
      </div>
    </div>
  )
}
