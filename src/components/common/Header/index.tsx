import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './index.css'
import { menu } from '@/config/routes'
import Icon from '@/components/common/Icon'

export default function Header() {
  const { pathname } = useLocation()

  const headerNav = useMemo(
    () => menu[0].children?.filter(mc => mc.path),
    [menu],
  )

  const isActive = (path?: string) => path && pathname.includes(path)

  return (
    <header>
      <h1>SG Page Game</h1>
      <div className="head-nav">
        {headerNav?.map(hm => (
          <Link
            className={isActive(hm.path) ? 'active' : ''}
            key={hm.path}
            to={`../${hm.path}`}
          >
            <span>{hm.extra?.name}</span>
            <Icon type={hm.extra?.icon} />
          </Link>
        ))}
      </div>
    </header>
  )
}
