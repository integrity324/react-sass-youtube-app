import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { FaCompass } from 'react-icons/fa';
import { MdSubscriptions } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SmallSideBar = () => {
  return (
    <aside className='small_sidebar'>
      <div className='small_sidebar_container'>
      <Link to='/' data-for='sidebar' data-tip='Home'>
            <div className='sidebar_icon_container'>
              <AiFillHome size={23} className='sidebar_icon' />
              <h4 className='sidebar_text'>Home</h4>
            </div>
      </Link>

      <Link to='/feed/explore' data-for='sidebar' data-tip='Home'>
            <div className='sidebar_icon_container'>
              <FaCompass size={23} className='sidebar_icon' />
              <h4 className='sidebar_text'>Explore</h4>
            </div>
      </Link>

      <Link to='/feed/subscription' data-for='sidebar' data-tip='Home'>
            <div className='sidebar_icon_container'>
              <MdSubscriptions size={23} className='sidebar_icon' />
              <h4 className='sidebar_text'>Subscription</h4>
            </div>
      </Link>

      </div>

    </aside>
  )
}

export default SmallSideBar;