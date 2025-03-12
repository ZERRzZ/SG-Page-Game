import { RouteObject } from 'react-router-dom'

import { MyRoute } from '@/types/common/MyRoute'

/** 将 MyRoute 格式的路由转换成 RouteObject 格式的路由 */
export const menuToRoute = (menu: MyRoute[]) => {
  return menu.map(m => {
    const obj: RouteObject = {
      index: m.index,
      path: m.path,
      element: m.element,
    }
    if (m.path === '/') {
      obj.errorElement = m.errorElement
    }
    if (m.children) {
      obj.children = menuToRoute(m.children)
    }
    return obj
  })
}
