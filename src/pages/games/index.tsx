import { useEffect, useState } from 'react'

import './index.css'
import Exhibition from '@/components/Exhibition'
import { ExhibitionItem } from '@/types/Exhibition'
import exhibitions from '@/config/exhibitions'

export default function GameIndex() {

  const [elist, setElist] = useState<ExhibitionItem[]>([])

  useEffect(() => {
    exhibitions.game && setElist(exhibitions.game)
  }, [exhibitions])

  return (
    <>
      <Exhibition list={elist} />
    </>
  )

}