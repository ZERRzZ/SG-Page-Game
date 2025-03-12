import { Fragment, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './index.css'
import Icon from '../Icon'
import { menu } from '@/config/routes'
import type { MyBreadcrumb } from '@/types/common/MyBreadcrumb'

export default function Breadcrumb() {
  const { pathname } = useLocation()

  const splitPath = useMemo(() => pathname.split('/'), [pathname])

  const breadcrumbPath = useMemo(
    () => splitPath.map((_, i) => `/${splitPath.slice(0, i + 1).join('/')}`),
    [splitPath],
  )

  const items: MyBreadcrumb[] = useMemo(() => {
    let activeMenu = menu
    return breadcrumbPath
      .map((bp, i) => {
        const route = activeMenu.find(am => am.path === splitPath[i])
        if (!route) {
          console.error(`找不到路由：${bp}`)
          return { href: bp, title: null }
        }
        route.children && (activeMenu = route.children)
        return {
          href: bp,
          title: (
            <>
              {route.extra?.icon && <Icon type={route.extra.icon} />}
              {route.extra?.name}
            </>
          ),
        }
      })
      .filter(item => item.title !== null)
  }, [breadcrumbPath, splitPath, menu])

  return (
    <div className="breadcrumb">
      {items.map((v, i) => (
        <Fragment key={v.href}>
          <Link to={v.href || '/'}>{v.title}</Link>
          {i !== items.length - 1 ? <span>/</span> : ''}
        </Fragment>
      ))}
    </div>
  )
}
