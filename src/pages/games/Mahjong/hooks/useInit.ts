import { useMemo, useState } from 'react'

export const useInit = () => {
  const ms = ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m']
  const ss = ['1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s']
  const ps = ['1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p']
  const zs = ['1z', '2z', '3z', '4z', '5z', '6z', '7z']
  const doras = ['0m', '0s', '0p']

  const totalMahjong = [...ms, ...ss, ...ps, ...zs]
    .map(v => {
      if (v.search(/5[msp]/) !== -1) {
        return [v, v, v]
      }
      return [v, v, v, v]
    })
    .flat()
    .concat(doras)

  const originScore = new Map([
    ['1', 25000],
    ['2', 25000],
    ['3', 25000],
    ['4', 25000]
  ])

  const [mahjong, setMahjong] = useState<string[]>(totalMahjong)
  const [trumpCard, setTrumpCard] = useState<string[]>([])
  const [dora, setDora] = useState<string[]>([])
  const [p1Card, setP1Card] = useState<string[]>([])
  const [p2Card, setP2Card] = useState<string[]>([])
  const [p3Card, setP3Card] = useState<string[]>([])
  const [p4Card, setP4Card] = useState<string[]>([])
  const [score, setScore] = useState(originScore)
  const [p1Discard, setP1Discard] = useState<string[]>([])
  const [p2Discard, setP2Discard] = useState<string[]>([])
  const [p3Discard, setP3Discard] = useState<string[]>([])
  const [p4Discard, setP4Discard] = useState<string[]>([])

  // const setPlayerCards = useMemo(
  //   () => ({
  //     setP1Card,
  //     setP2Card,
  //     setP3Card,
  //     setP4Card
  //   }),
  //   [setP1Card, setP2Card, setP3Card, setP4Card]
  // )

  const init = () => {
    setMahjong(totalMahjong)
    setTrumpCard([])
    setDora([])
    setP1Card([])
    setP2Card([])
    setP3Card([])
    setP4Card([])
    setScore(originScore)
    setP1Discard([])
    setP2Discard([])
    setP3Discard([])
    setP4Discard([])
  }

  return {
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
    setP4Discard,
    // setPlayerCards
  }
}
