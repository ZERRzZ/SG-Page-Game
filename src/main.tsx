import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// vite-plugin-svg-icons 脚本
import 'virtual:svg-icons-register'

import './index.css'

import routes from './config/routes'
import { menuToRoute } from './utils/common/routes'

import { mouseTrail } from './utils/mouseTrail'
mouseTrail.add()

// console.log(import.meta.env.VITE_BASE_DIR);

const router = createBrowserRouter(menuToRoute(routes), {
  basename: import.meta.env.VITE_BASE_DIR,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
