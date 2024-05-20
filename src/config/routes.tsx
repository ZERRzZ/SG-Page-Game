import { RouteObject } from "react-router-dom"

import App from "@/App"
import Touhou from "@/pages/Touhou"
import Typing from "@/pages/Typing"
import ErrorPage from "@/pages/ErrorPage"
import GreedySnake from "@/pages/GreedySnake"

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
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
      }
    ]
  },
]

export default routes 