import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "../Card/card.scss"

const Card = (props) => {
  return (
    <div className='cards'>
      <img src={props.src} width={250}></img>
      <h6>{props.title}</h6>
      <div>
      <StarBorderIcon sx={{fontSize:16}}/>
      <StarBorderIcon sx={{fontSize:16}}/>
      <StarBorderIcon sx={{fontSize:16}}/>
      {/* <StarBorderIcon sx={{fontSize:16}}/>
      <StarBorderIcon sx={{fontSize:16}}/> */}
      </div>
      <h5>{props.price}</h5>
    </div>
  )
}

export default Card
