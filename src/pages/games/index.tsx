import { useMemo } from 'react'

import './index.css'

import { Link } from 'react-router-dom'
import Icon from '@/components/common/Icon'
import routes from '@/config/routes'

export default function GameIndex() {
  const gameList = useMemo(
    () =>
      routes[0].children
        ?.find(r => r.path === 'games')
        ?.children?.filter(rc => !rc.index),
    [routes],
  )

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
