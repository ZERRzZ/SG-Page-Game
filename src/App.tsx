import { Outlet, useLocation } from 'react-router-dom'

import './App.css'
import Exhibition from './components/Exhibition'
import Header from './components/Header'
import Nav from './components/Nav'

function App() {

  const location = useLocation()

  return (
    <>
      <Header />
      <main>
        {
          location.pathname === '/' ?
            <Exhibition /> :
            <Nav />
        }
        <Outlet />
      </main>
    </>
  )

}

export default App
