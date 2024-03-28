import { Outlet } from 'react-router-dom'

import './App.css'
import Exhibition from './components/Exhibition'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <Exhibition />
      <Outlet />
    </>
  )

}

export default App
