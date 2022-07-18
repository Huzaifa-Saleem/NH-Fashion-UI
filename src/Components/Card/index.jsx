import React, { useState } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "../Card/card.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link,NavLink} from 'react-router-dom'

const Card = (props) => {

  let badge;
  if (props.openSpots === 0){
    badge="SOLD OUT";
  }
  else if(props.version==="new"){
       badge="NEW";
  }
  else if(props.sale===true){
       badge="SALE";
  }
  else {
    badge=""
  }

  // const styles = {
  //   popup:{
  //     backgroundColour: 0 ? "black" : "red", 
  //   }
  // };

  const[isShown,setIsShown] =React.useState(false)
  function toggle(){
    setIsShown(prevShown => !prevShown)
  }

  return (
    <div> 
    <div className='cards'>
    <div className='badges'>{badge}</div>
    <div className='fav' onClick={toggle}>{isShown === true ? <FavoriteIcon/> :<FavoriteBorderIcon />}</div> 
      <img src={props.src} width={250}></img>
      <div class="hide"><Link to="/"> + Add to Cart </Link></div>
      <h6>{props.title}</h6>
      <div>
      <StarBorderIcon sx={{fontSize:16}}/>
      <StarBorderIcon sx={{fontSize:16}}/>
      <StarBorderIcon sx={{fontSize:16}}/>
      </div>
      <div className='flex'>
      <h5>{props.price}</h5>
      <div className='color'>
        <NavLink to='/'><div className='red'></div></NavLink>
        <NavLink to='/'><div className='green'></div></NavLink>
        <NavLink to='/'><div className='blue'></div></NavLink>
      </div>
      </div>
      
    </div>
    </div>
    
  )
}

export default Card
