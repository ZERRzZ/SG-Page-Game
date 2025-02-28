import { RouteObject } from 'react-router-dom'

import App from '@/App'
import Layout from '@/layouts'
import IndexPage from '@/pages'
import GameIndex from '@/pages/games'
// import GuideIndex from '@/pages/guides'
// import Touhou from '@/pages/games/Touhou'
import Typing from '@/pages/games/Typing'
import ErrorPage from '@/pages/ErrorPage'
import { MyRoute } from '@/types/MyRoute'
import Mahjong from '@/pages/games/Mahjong'

export const menus: MyRoute[] = [
  {
    path: '/',
    element: <App />,
    extra: { name: '首页', icon: 'icon-home' },
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <IndexPage />
      },
      {
        path: 'games',
        element: <Layout />,
        extra: { name: '游戏', icon: 'icon-game' },
        children: [
          {
            index: true,
            element: <GameIndex />
          },
          // {
          //   path: 'Touhou',
          //   element: <Touhou />,
          //   extra: {
          //     id: 'g1',
          //     name: '东方',
          //     icon: '',
          //     description: '一个打飞机游戏却有成为东方那样的野心'
          //   }
          // },
          {
            path: 'Mahjong',
            element: <Mahjong />,
            extra: {
              id: 'g2',
              name: '麻将',
              icon: 'icon-mahjong',
              description: '麻将小游戏'
            }
          },
          {
            path: 'Typing',
            element: <Typing />,
            extra: {
              id: 'g3',
              name: '打字',
              icon: 'icon-keyboard',
              description: '极简打字小游戏'
            }
          }
        ]
      }
      // {
      //   path: 'guides',
      //   element: <Layout />,
      //   extra: { name: '攻略', icon: 'icon-guide' },
      //   children: [
      //     {
      //       index: true,
      //       element: <GuideIndex />
      //     },
      //     {
      //       path: 'RanceQuest',
      //       element: <div>RanceQuest</div>, // TODO: replace with actual component
      //       extra: {
      //         id: 's1',
      //         name: 'RanceQuest',
      //         icon: '',
      //         description:
      //           '兰斯第 8 部，由日本游戏公司 AliceSoft 制作的健全大冒险游戏'
      //       }
      //     }
      //   ]
      // }
    ]
  }
]

const renderRoutes = (menus: MyRoute[]) => {
  return menus.map(m => {
    const obj: RouteObject = {
      index: m.index,
      path: m.path,
      element: m.element
    }
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

export const getPageRoute = (path: string) => {
  const mainMenu = menus[0].children
  if (!mainMenu) return
  const pathRoute = mainMenu.find(item => item.path === path)
  if (!pathRoute || !pathRoute.children) return
  const pathRouteList: MyRoute[] = pathRoute.children.filter(
    (item: MyRoute) => item.extra
  )
  return pathRouteList
}
