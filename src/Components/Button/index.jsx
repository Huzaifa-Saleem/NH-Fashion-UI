import React from 'react'
import { Link } from 'react-router-dom'
import "../Button/button.scss"

const Button = (props) => {
  return (
    <Link to={props.src}><button className='btn11'>
       
           {props.title}
       
    </button></Link>
  )
}

export default Button
