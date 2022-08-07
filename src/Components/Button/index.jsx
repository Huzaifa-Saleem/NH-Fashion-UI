import React from 'react'
import { Link } from 'react-router-dom'
import "../Button/button.scss"

const Button = (props) => {
  return (
    <div className='btn11'>
      <Link to={props.src} className="btn1">   
        {props.title}
      </Link>
    </div>
  )
}

export default Button
