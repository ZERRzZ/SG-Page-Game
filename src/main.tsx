import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import { routes } from './config/routes'

import { mouseTrail } from './utils'
mouseTrail.add()

// console.log(import.meta.env.VITE_BASE_DIR);

const router = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_BASE_DIR
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
