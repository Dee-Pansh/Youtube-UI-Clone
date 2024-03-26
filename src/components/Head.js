import React from 'react'
import hamburger from "../utils/Images/hamburger-menu.svg"
import { useDispatch } from 'react-redux'
import { toggleMenu } from "../utils/myAppSlice"
import { Link } from 'react-router-dom'
const Head = () => {
  const dispatch=useDispatch();
  const handleClick=()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col shadow-lg m-2 pb-2 relative top-0'>

      {/* Left Section */}
      <div className='flex h-[50px]'>
        <img className='cursor-pointer relative h-7 top-4 left-2' alt="menu" src={hamburger} onClick={handleClick}/>
       <a href="/"> <img className='h-14 ml-4 cursor-pointer' src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" alt="Youtube logo" /></a>
      </div>


      {/* Middle Section */}
      <div className='flex h-[50px]'>
        <input type="text" className='border-2 rounded-l-3xl outline-none w-[85%] p-2 ' placeholder='Search'/>
        <button className='border-2 rounded-r-3xl w-[12%] bg-gray-200'>🔍</button>
      </div>


      {/* Right Section */}
      <div className='h-[100%] p-2'>
        <img className='h-8 absolute right-4' alt='user' src="https://cdn-icons-png.freepik.com/256/1077/1077114.png" />
      </div>

    </div>
  )
}

export default Head
