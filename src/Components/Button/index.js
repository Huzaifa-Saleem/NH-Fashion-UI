import React from 'react'
import { Link } from 'react-router-dom'
import "../Button/button.scss"
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

const Button = (props) => {
  return (
    <button className='btn11'>
       
           {props.title} <span></span> <ArrowRightAltOutlinedIcon sx={{ fontSize: 30, color:'white',marginTop:-0.5}}/>
       
    </button>
  )
}

export default Button
