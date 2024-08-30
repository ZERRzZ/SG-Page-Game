import { useEffect, useState } from 'react'

import './index.css'
import Exhibition from '@/components/Exhibition'
import { menus } from '@/config/routes'
import { MyRoute } from '@/types/MyRoute'

export default function GameIndex() {

  const [elist, setElist] = useState<MyRoute[]>([])

  useEffect(() => {
    if (menus && menus.length > 0) {
      const temp = menus[0].children?.find(item => item.path === 'games')
      const gameLists = temp?.children?.filter(tc => tc.extra.id)
    }
    exhibitions.game && setElist(exhibitions.game)
  }, [exhibitions])

  return (
    <>
      <Exhibition list={elist} />
    </>
  )

}