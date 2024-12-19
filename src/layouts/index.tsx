import { Outlet } from 'react-router-dom'

import './index.css'
import Nav from '@/components/Nav'
import Header from '@/components/Header'

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Nav />
        <Outlet />
      </main>
    </>
  )
}
