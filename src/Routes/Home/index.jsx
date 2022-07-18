import {useEffect, useState} from 'react'
import "../Home/home.scss";
import {Link} from 'react-router-dom'
import Slider from '../Home/Slider'
import Card from '../../Components/Card';
import card from '../../Components/Card/cardmap';
import BasicTabs from '../../Components/Tabs';

const Home = () => {
  
  //windows width

  return (
    <div>
      <Slider/>
      <section>
      <div className='cloth'>
        <div className='clothing'>
          <div className='clothing-content'>
              <h2>Clothing <br /> Collections 2022</h2>
              <Link to='/'>SHOP NOW</Link>
          </div>
          <div className='clothing-img'>
              <img src="/images/clothing.webp" alt="" />
          </div>
        </div>
      </div>
      <div className='flex'>
      <div className='accessories'>
      <div className='accessories-img'>
        <img src="/images/accessories.jpg" alt="" />
      </div>
      <div className='accessories-content'>
          <h2>Accessories</h2>
          <Link to='/'>SHOP NOW</Link>
      </div>
      </div>
      <div className='shoes'>
          <div className='shoes-content'>
          <h2>Shoes Spring <br /> 2022</h2>
          <Link to='/'>SHOP NOW</Link>
          </div>
        <div className='shoes-img'>
            <img src="/images/shoes.jpg" alt="" />
        </div>
      </div>
      </div>
      </section>
     
              <BasicTabs/>
      <section className='instagram'>
           <div>
            <img src="/images/insta-cloth.jpg" alt="" width={700} height="auto"/>
           </div>
           <div className='insta-content'>
            <h5>Instagram</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt laboriosam ducimus minus. Necessitatibus voluptatem expedita cumque.</p>
            <h2>#NH_Fashion</h2>
           </div>
      </section>
    </div>
  )
}

export default Home
