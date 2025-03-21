import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import '@/styles/common/variables.css'
import '@/styles/common/animations.css'
import '@/styles/common/reset.css'

import routes from '@/config/routes'
import { menuToRoute } from '@/utils/routes'

// vite-plugin-svg-icons 脚本
import 'virtual:svg-icons-register'

const router = createBrowserRouter(menuToRoute(routes), {
  basename: import.meta.env.VITE_BASE_DIR,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
