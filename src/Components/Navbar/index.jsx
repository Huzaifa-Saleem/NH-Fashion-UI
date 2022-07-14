import React from 'react'
import "../Navbar/navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
const Navbar = () => {
  return (
    <div className='navbar container'>
      <div className='nav-logo'>
        <img src="download.webp" alt="" />
      </div>
      <div className='nav-links'>
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className='nav-icons'>
        <ul>
            <li><SearchIcon sx={{ fontSize: 26}}/></li>
            <li><FavoriteBorderIcon sx={{ fontSize: 26}}/></li>
            <li>
              <Badge badgeContent={4} color="primary"  max={99}>
              <ShoppingCartOutlinedIcon color="black" sx={{ fontSize: 26}} />
              </Badge>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
