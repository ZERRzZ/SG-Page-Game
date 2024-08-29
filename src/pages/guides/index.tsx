import { useEffect, useState } from 'react';

import './index.css'
import { ExhibitionItem } from '@/types/Exhibition';
import Exhibition from '@/components/Exhibition';
import exhibitions from '@/config/exhibitions';

export default function GuideIndex() {

  const [elist, setElist] = useState<ExhibitionItem[]>([])

  useEffect(() => {
    exhibitions.guide && setElist(exhibitions.guide)
  }, [exhibitions])

  return (
    <>
      <Exhibition list={elist} />
    </>
  )

}