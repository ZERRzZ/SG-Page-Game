import { RouteObject } from "react-router-dom"

import App from "../App"
import ErrorPage from "../pages/ErrorPage"
import Touhou from "../pages/Touhou"
import GreedySnake from "../pages/GreedySnake"

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'touhou',
        element: <Touhou />
      },
      {
        path: 'greedy-snake',
        element: <GreedySnake />
      }
    ]
  },
]

export default routes 