import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Navbar from '../Navbar/index';
import { Link, NavLink } from 'react-router-dom'
import Home from '../../Routes/Home';
import "../Header/header.scss"
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
            <li><Link to='/login'>LOG IN</Link></li>
            <li><Link to='/register'>SIGN UP</Link></li>
        </ul>
      </div>
      </div>
      </div>
      <Navbar/>
    </div>
  )
}

export default Header
