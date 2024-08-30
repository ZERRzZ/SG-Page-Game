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
        children: [
          {
            index: true,
            element: <GameIndex />
          },
          {
            path: 'Touhou',
            element: <Touhou />,
            extra: { id: "g1", name: "Touhou", icon: "", description: "一个打飞机游戏却有成为东方那样的野心" }
          },
          {
            path: 'GreedySnake',
            element: <GreedySnake />,
            extra: { id: "g2", name: "GreedySnake", icon: "icon-she", description: "贪吃蛇小游戏" }
          },
          {
            path: 'Typing',
            element: <Typing />,
            extra: { id: "g3", name: "Typing", icon: "icon-jianpan", description: "极简打字小游戏" }
          }
        ]
      },
      {
        path: 'guides',
        element: <Outlet />,
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

export const routes = renderRoutes(menus)