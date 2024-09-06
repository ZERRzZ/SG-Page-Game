import { useEffect, useState } from 'react'

import './index.css'
import { getPageRoute, menus } from '@/config/routes'
import { MyRoute } from '@/types/MyRoute'
import Exhibition from '@/components/Exhibition'

export default function GameIndex() {

  const [elist, setElist] = useState<MyRoute[]>([])

  useEffect(() => {
    const gameList = getPageRoute('games')
    gameList && setElist(gameList)
  }, [menus])

  return (
    <>
      <Exhibition list={elist} />
    </>
  )

}