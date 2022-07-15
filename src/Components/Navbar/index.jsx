import React, { useRef } from 'react'
import "../Navbar/navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import Badge from '@mui/material/Badge';
import { NavLink , Link} from 'react-router-dom';
const Navbar = () => {

  const[isShown,setIsShown] =React.useState(false)

  function toggle(){
    setIsShown(prevShown => !prevShown)
  }

  const[showMenu,setShowMenu] =React.useState(false)

  const showSidebar = () => setShowMenu(!showMenu)
  
  return (
    <div className=''>
      <div className='navbar'>
      <div className='nav-logo'>
        <img src="./images/logo.svg" alt="" />
      </div>
      <div className={showMenu ? "nav-link" : "nav-links"}>
      <button>
        <CloseIcon sx={{ fontSize: 30, color:'white'}} onClick = {showSidebar}/>
        </button>
        <ul>
            <li><NavLink to='/Home' className='link'>Home</NavLink></li>
            <li><NavLink to='/Products' className='link'>Products</NavLink></li>
            <li><NavLink to='/Contact' className='link'>Contact</NavLink></li>
        </ul>
      </div>
      <button className='hamburger'>
        <HorizontalSplitIcon sx={{ fontSize: 30}} onClick = {showSidebar}/>
        </button>
      <div className='nav-icons'>
        <ul>
            <li>
              {isShown && <input type="text" placeholder='search'/>}
              <span></span>
              <SearchIcon sx={{ fontSize: 26,color:'black'}} onClick={toggle} />
              </li>
            <li><Link to='/'><FavoriteBorderIcon sx={{ fontSize: 26,color:'black'}}/></Link></li>
            <li><Link to='/'>
              <Badge badgeContent={4} color="primary"  max={99}>
              <ShoppingCartOutlinedIcon color="black" sx={{ fontSize: 26,color:'black'}} />
              </Badge></Link>
            </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar
