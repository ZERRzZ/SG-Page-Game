import { Outlet, useLocation } from 'react-router-dom'

import './App.css'
import Exhibition from './components/Exhibition'
import Header from './components/Header'
import Nav from './components/Nav'

function App() {

  const location = useLocation()

  console.log(location);

  return (
    <>
      <Header />
      {
        location.pathname === '/' ?
          <Exhibition /> :
          <Nav />
      }
      <Outlet />
    </>
  )

}

export default App
