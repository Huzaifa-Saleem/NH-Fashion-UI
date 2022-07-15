import React from 'react'
import Navbar from '../Navbar/index';
import { NavLink } from 'react-router-dom'
import "../Header/header.scss"
const Header = () => {
  return (
    <div>
      <div className='head'>
      <div className=''>
      <div className='header'>
      <div className='header-content'>
        <p>Free shipping, 30-days return or refund guarentee.</p>
      </div>
      <div className='nav-link'>
        <ul>
            <li><NavLink to='/' className='link'>LOG IN</NavLink></li>
            <span></span>
            <li><NavLink to='/' className='link'>SIGN UP</NavLink></li>
        </ul>
      </div>
      </div>
      </div>
      </div>
      <Navbar/>
    </div>
  )
}

export default Header
