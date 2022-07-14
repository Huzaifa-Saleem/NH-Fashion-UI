import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Navbar from '../Navbar/index';
import { Link, NavLink } from 'react-router-dom'
import Home from '../../Routes/Home';
import "../Header/header.css"
const Header = () => {
  return (
    <div>
      <div className='head'>
      <div className='container header'>
      <div className='header-content'>
        <p>Free shipping, 30-days return or refund guarentee.</p>
      </div>
      <div className='nav-link'>
        <ul>
            <li>LOG IN</li>
            <li>SIGN UP</li>
        </ul>
      </div>
      </div>
      </div>
      <Navbar/>
    </div>
  )
}

export default Header
