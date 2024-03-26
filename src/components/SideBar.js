import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const SideBar = () => {
  const showSideBar=useSelector(store=>store.app.isMenuOpen);
  
  // Early Return 
  if(showSideBar===false) return null;



  return (
    <div className="w-2/12 p-5 shadow-lg text-lg">
      <h1 className='font-bold'>Navigators</h1>
      <ul>
        <Link to={"/"}><li>Home</li></Link>
        <li>Trending</li>
        <li>Hot🔥</li>
      </ul>
      <hr className='border border-gray-700'/>
      <h1 className='font-bold'>Subscriptions</h1>
      <ul>
      <li>Sports</li>
      <li>Games</li>
      <li>Music</li>
      <li>Entertainment</li>
      </ul>
      <hr className='border border-gray-700'/>
      <h1 className='font-bold'>Watch Later</h1>
      <ul>
      <li>Sports</li>
      <li>Games</li>
      <li>Music</li>
      <li>Entertainment</li>
      </ul>
      <hr className='border border-gray-700'/>
    </div>
  )
}

export default SideBar  