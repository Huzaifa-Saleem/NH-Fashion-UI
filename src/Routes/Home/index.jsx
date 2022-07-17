import React from 'react'
import "../Home/home.scss";
import Slider from '../Home/Slider'

const Home = () => {

  return (
    <div>
      <Slider/>
      <div className='col-lg-7 cloth'>
      <div className='clothing'>
      <div className='clothing-content'>
         <h2>
          Clothing <br /> collection 2022
         </h2>
      </div>
      <div className='clothing-img'>
        <img src="/images/clothing.webp" alt="" />
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default Home
