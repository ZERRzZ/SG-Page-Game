import { Fragment, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './index.css'
import IconFont from '../IconFont'
import { menus } from '@/config/routes'
import { MyRoute } from '@/types/MyRoute'
import { Breadcrumb } from '@/types/Breadcrumb'

export default function Nav() {

  const location = useLocation()

  const [items, setItems] = useState<Breadcrumb[]>([])

  // 不涉及 dom 更新，无须使用 state
  let nowMenu: MyRoute[] = []

  useEffect(() => {
    // 获取面包屑每层级的路由
    const pathArr = location.pathname.split('/')
    const transPathArr: string[] = []
    pathArr.reduce((pre, cur) => {
      transPathArr.push(pre + cur)
      return pre + cur + '/'
    }, '')
    // console.log(pathArr, 'pathArr')
    // console.log(transPathArr, 'transPathArr')
    // 获取每个层级的额外信息并设置面包屑
    nowMenu = JSON.parse(JSON.stringify(menus))
    setItems(transPathArr.map((t, i) => {
      const pathObj = getPathDetails(pathArr[i] || '/')
      return {
        href: t,
        title:
          <>
            {pathObj?.extra?.icon ? <IconFont type={pathObj?.extra?.icon} /> : ''}
            {pathObj?.extra?.name}
          </>
      }
    }))
  }, [location])

  const getPathDetails = (path: string) => {
    const result = nowMenu.find(m => m.path === path)
    if (!result) console.error('找不到路由！')
    else {
      result.children && (nowMenu = result.children)
      return result
    }
  }

  return (
    <div className="breadcrumb">
      {
        items.map((v, i) =>
          <Fragment key={v.href}>
            <Link to={v.href || ''}>{v.title}</Link>
            {i !== items.length - 1 ? <span>/</span> : ''}
          </Fragment>
        )
      }
    </div>
  )

}