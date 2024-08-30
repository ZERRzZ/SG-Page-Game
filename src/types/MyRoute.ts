import { RouteObject } from "react-router-dom"

/**
 * 自定义路由类型
 * @param extra 路由额外信息
 */
export type MyRoute = RouteObject & {
  extra?: MyRouteExtra
  children?: MyRoute[]
}

/**
 * 路由额外信息类型
 * @param id 路由项ID
 * @param name 路由项名称
 * @param icon 路由项相关图标名称，对应到 IconFont 的图标名称
 * @param img 路由项相关图片路径
 * @param description 路由项描述
 */
export interface MyRouteExtra {
  id?: string
  name?: string
  icon?: string
  img?: string
  description?: string
}