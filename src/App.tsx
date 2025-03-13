import { Outlet } from 'react-router-dom'

import './App.css'
import useTheme from './hooks/common/useTheme'
import { mouseTrail } from './utils/mouseTrail'

export default function App() {
  mouseTrail.add()
  useTheme()

  return <Outlet />
}
