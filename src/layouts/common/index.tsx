import { Outlet } from 'react-router-dom'

import './index.css'
import Breadcrumb from '@/components/common/Breadcrumb'
import Header from '@/components/common/Header'

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb />
        <Outlet />
      </main>
    </>
  )
}
