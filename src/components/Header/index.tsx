import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './index.css'
import { menus } from '@/config/routes'
import { MyRoute } from '@/types/MyRoute'
import Icon from '@/components/Icon'

export default function Header() {
  const { pathname } = useLocation()

  const headerMenus = useMemo(
    () => menus[0].children?.filter(mc => mc.path),
    [menus]
  )

  return (
    <header>
      <h1>SG Page Game</h1>
      <div className="head-nav">
        {headerMenus?.map((hm: MyRoute) => (
          <Link
            className={pathname.includes(`${hm.path}`) ? 'active' : ''}
            key={hm.path}
            to={`../${hm.path}`}
          >
            <span>{hm?.extra?.name}</span>
            <Icon type={hm.extra?.icon} />
          </Link>
        ))}
      </div>
    </header>
  )
}
