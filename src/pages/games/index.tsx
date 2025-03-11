import { useMemo } from 'react'

import './index.css'
import { getPageRoute, menus } from '@/config/routes'
import { Link } from 'react-router-dom'
import Icon from '@/components/common/Icon'

export default function GameIndex() {
  const gameList = useMemo(() => getPageRoute('games'), [menus])

  return (
    <div className="exhibition">
      {gameList?.map(gl => (
        <Link
          className="item"
          key={gl.extra?.id}
          to={gl.path || ''}
        >
          <Icon
            type={gl.extra?.icon}
            size="6em"
          />
          <span className="name">{gl.extra?.name}</span>
        </Link>
      ))}
    </div>
  )
}
