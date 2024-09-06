import { Outlet, RouteObject } from "react-router-dom"

import App from "@/App"
import Touhou from "@/pages/games/Touhou"
import Typing from "@/pages/games/Typing"
import ErrorPage from "@/pages/ErrorPage"
import GreedySnake from "@/pages/games/GreedySnake"
import IndexPage from "@/pages"
import GameIndex from "@/pages/games"
import GuideIndex from "@/pages/guides"
import { MyRoute } from "@/types/MyRoute"

export const menus: MyRoute[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <IndexPage />
      },
      {
        path: 'games',
        element: <Outlet />,
        extra: { name: "游戏" },
        children: [
          {
            index: true,
            element: <GameIndex />
          },
          {
            path: 'Touhou',
            element: <Touhou />,
            extra: { id: "g1", name: "东方", icon: "", description: "一个打飞机游戏却有成为东方那样的野心" }
          },
          {
            path: 'GreedySnake',
            element: <GreedySnake />,
            extra: { id: "g2", name: "贪吃蛇", icon: "", description: "贪吃蛇小游戏" }
          },
          {
            path: 'Typing',
            element: <Typing />,
            extra: { id: "g3", name: "打字", icon: "icon-keyboard", description: "极简打字小游戏" }
          }
        ]
      },
      {
        path: 'guides',
        element: <Outlet />,
        extra: { name: "攻略" },
        children: [
          {
            index: true,
            element: <GuideIndex />
          },
          {
            path: 'RanceQuest',
            element: <div>RanceQuest</div>, // TODO: replace with actual component
            extra: { id: "s1", name: "RanceQuest", icon: "", description: "兰斯第 8 部，由日本游戏公司 AliceSoft 制作的健全大冒险游戏" }
          }
        ]
      }
    ]
  }
]

const renderRoutes = (menus: MyRoute[]) => {
  return menus.map(m => {
    const obj: RouteObject = { index: m.index, path: m.path, element: m.element }
    if (m.path === '/') {
      obj.errorElement = m.errorElement
    }
    if (m.children) {
      obj.children = renderRoutes(m.children)
    }
    return obj
  })
}

export const getPageRoute = (path: string) => {
  if (!menus || !menus[0]) return
  if (!menus[0].children) return
  const pathRoute = menus[0].children.find(item => item.path === path)
  if (!pathRoute || !pathRoute.children) return
  const pathRouteList: MyRoute[] = pathRoute.children.filter((item: MyRoute) => item.extra)
  return pathRouteList
}

export const routes = renderRoutes(menus)