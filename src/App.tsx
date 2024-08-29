import { Outlet } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'

function App() {

  return (
    <>
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  )

}

export default App