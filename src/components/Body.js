import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  
  return (
    <div className='w-[100vw] mx-auto flex'>
        <SideBar />
        <Outlet/>
    </div>
  )
}

export default Body