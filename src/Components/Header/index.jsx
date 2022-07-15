import React from 'react'
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
            <li><NavLink to='/logIn' className='link'>LOG IN</NavLink></li>
            <span></span>
            <li><NavLink to='/signUp' className='link'>SIGN UP</NavLink></li>
        </ul>
      </div>
      </div>
      </div>
      
    </div>
    </div>
  )
}

export default Header
