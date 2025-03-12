import { ReactNode } from 'react'

/**
 * 面包屑项
 * @param href 跳转链接
 * @param title 标题
 */
export interface MyBreadcrumb {
  href: string
  title: ReactNode
}
