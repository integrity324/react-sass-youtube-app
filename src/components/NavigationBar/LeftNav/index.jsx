import React from 'react'
import { IoMenu } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import imgUrl from '../../../assets/logo.png';
import { useContext } from 'react';

const LeftNav = () => {
  const {handleToggleSidebar} =useContext(SidebarContext);
  return (
    <div className='menu-logo'>
      <button 
        conClick={handleToggleSidebar}
        className='icon-container burgerMenu'>
        <IoMenu size={25} />
      </button>
      <div className='logo-container'>
        <Link to="/">
          <img src={imgUrl} alt="youtube logo" />
        </Link>

      </div>
    </div>
  )
}

export default LeftNav