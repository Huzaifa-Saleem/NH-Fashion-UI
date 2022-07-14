import React from 'react'
import "../Navbar/navbar.css";
const Navbar = () => {
  return (
    <div className='navbar container'>
      <div className='nav-logo'>
        <img src="download.webp" alt="" />
      </div>
      <div className='nav-links'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className='nav-icons'>
        <ul>
            
        </ul>
      </div>
    </div>
  )
}

export default Navbar
