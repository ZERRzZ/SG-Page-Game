import { useEffect, useState } from 'react'

import './index.css'
import Exhibition from '@/components/Exhibition'
import { getPageRoute, menus } from '@/config/routes'
import { MyRoute } from '@/types/MyRoute'

export default function GuideIndex() {
  const [elist, setElist] = useState<MyRoute[]>([])

  useEffect(() => {
    const guideList = getPageRoute('guides')
    guideList && setElist(guideList)
  }, [menus])

  return (
    <>
      <Exhibition list={elist} />
    </>
  )
}
