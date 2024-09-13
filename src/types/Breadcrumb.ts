import { ReactNode } from "react"

/**
 * 面包屑项
 * @param href 跳转链接
 * @param title 标题
 */
export interface Breadcrumb {
  href: string
  title: ReactNode
}