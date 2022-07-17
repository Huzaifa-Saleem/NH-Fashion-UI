import React from 'react'
import { Link } from 'react-router-dom'
import "../Button/button.scss"

const Button = (props) => {
  return (
    <button className='btn11'>
       
           {props.title}
       
    </button>
  )
}

export default Button
