import { RouteObject } from "react-router-dom"

import App from "../App"
import ErrorPage from "../pages/ErrorPage"

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  }
]

export default routes 