import { Outlet, RouteObject } from "react-router-dom"

import App from "@/App"
import Touhou from "@/pages/games/Touhou"
import Typing from "@/pages/games/Typing"
import ErrorPage from "@/pages/ErrorPage"
import GreedySnake from "@/pages/games/GreedySnake"
import IndexPage from "@/pages"
import GameIndex from "@/pages/games"
import GuideIndex from "@/pages/guides"

const routes: RouteObject[] = [
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
            element: <Touhou />
          },
          {
            path: 'GreedySnake',
            element: <GreedySnake />
          },
          {
            path: 'Typing',
            element: <Typing />
          },
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
            element: <div>RanceQuest</div> // TODO: replace with actual component
          }
        ]
      }
    ]
  }
]

export default routes 