import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components'

import './Default.css'

export const Default = () => {
  return (
    <div className="layout">
      <Sidebar />
      
      <Outlet />
   </div>
  )
}