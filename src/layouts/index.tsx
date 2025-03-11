import { Outlet } from 'react-router-dom'

import './index.css'
import Nav from '@/components/common/Nav'
import Header from '@/components/common/Header'

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
