
import "../Home/home.scss";
import {Link} from 'react-router-dom'
import Slider from '../../Components/Slider/index'
import Trending from "../../Components/Carousel/Trending";
import React, { useState, useEffect } from 'react'
import Button from "../../Components/Button";

const Home = () => {

const [timerDays, setTimerDays] = useState(0);
const [timerHours, setTimerHours] = useState(0);
const [timerMinutes, setTimerMinutes] = useState(0);
const [timerSeconds, setTimerSeconds] = useState(0);

let interval;
const startTimer =() => {
  const countDate = new Date ("August 21,2022").getTime();

  interval = setInterval(() => {
    const now = new Date().getTime();

    const distance = countDate - now;

    const days= Math.floor(distance / (24*60*60*1000));
    const hours= Math.floor(distance % (24*60*60*1000) /(1000*60*60));
    const minutes= Math.floor(distance % (60*60*1000) /(1000*60));
    const seconds= Math.floor(distance % (60*1000) /(1000));

    if(distance<0){
      clearInterval(interval.current);
    }
    else{
      setTimerDays(days > 9 ? days : '0' + days);
      setTimerHours(hours > 9 ? hours : '0' + hours);
      setTimerMinutes(minutes > 9 ? minutes : '0' + minutes);
      setTimerSeconds(seconds > 9 ? seconds : '0' + seconds);
    }
  });
}
useEffect(() => {
startTimer();
});

return (
<div>
      <Slider/>

  {/* --------------------- Collections section -------------------------- */}

  <section className="container collections">
      <div className='cloth'>
        <div className='clothing row m-md-5 my-5'>
        <div className="col-xl-3 col-lg-1"></div>
        <div className='content cont-access1 col-xl-4 col-lg-6 col-sm-6 my-auto'>
          <h2 className=" fs-2 fw-bold position-relative">Clothing <br /> Collections 2022</h2>
          <Link className="text-decoration-none position-relative" to='/products'>SHOP NOW</Link>
        </div>
        <div className='clothing-img col-xl-5 col-lg-5 col-sm-6'>
              <img className="img-fluid" src="/images/clothing.webp" alt="" />
          </div>
        <div className='content cont-access2 col-xl-4 col-lg-5 col-sm-6 my-3'>
          <h2 className=" fs-2 fw-bold position-relative">Clothing <br /> Collections 2022</h2>
          <Link className="text-decoration-none position-relative" to='/products'>SHOP NOW</Link>
        </div>
        </div>
      </div>
      <div className='row'>
      <div className='accessories col-xl-5 '>
        <div className="row">
          <div className='accessories-img col-sm-5 col-xl-12'>
          <img className="img-fluid" src="/images/accessories.jpg" alt="" />
          </div>
          <div className='content col-sm-7 my-sm-auto ps-sm-5 ps-xl-2 ps-xl-0'>
          <h2 className="fs-2 fw-bold mt-3">Accessories</h2>
          <Link className="text-decoration-none position-relative" to='/products'>SHOP NOW</Link>
          </div>
        </div>
      </div>
      <div className='shoes col-xl-7 row my-5'>
        <div className="row">
        <div className='content shoes-cont1 col-xl-4 col-sm-6 my-auto ms-sm-5'>
          <h2 className="fs-2 fw-bold position-relative">Shoes Spring <br /> 2022</h2>
          <Link className="text-decoration-none position-relative" to='/products'>SHOP NOW</Link>
          </div>
          <div className='shoes-img col-xl-8 col-sm-6'>
            <img className="img-fluid" src="/images/shoes.jpg" alt="" />
        </div>
        <div className='content shoes-cont2 col-xl-5 col-sm-6 my-auto pt-3'>
          <h2 className="fs-2 fw-bold position-relative">Shoes Spring <br /> 2022</h2>
          <Link className="text-decoration-none position-relative" to='/products'>SHOP NOW</Link>
          </div>
        </div>
      </div>
      </div>
      
  </section>

{/* ---------------------- Products section----------------------- */} 

<section>
  <div className="trending container">
    <Trending/>
  </div>
</section>

{/* ---------------------- Sale section----------------------- */}

  <section>
  <div className="sale row my-5">
    <div className="collections col-xl-4 col-md-6 d-flex ">
      <div className="white-box my-auto">
      </div>
      <div className="collections-content justify-content-end ms-n5 my-auto"> 
            <h4 className="shoe fs-2 fw-bold">Shoes</h4>
            <h4 className="my-4  fs-2 fw-bold">Accessories</h4>
            <h4 className="shoe fs-2 fw-bold">Clothings</h4>       
      </div>
    </div>
    <div className="col-xl-4 bag col-md-6">
      <img className="position-relative img-fluid" src="/images/bag.webp" alt="" />
      <p className="fs-5 fw-bold text-white text-center bg-black rounded-circle pt-3 position-absolute"> <span className="fs-6 fw-normal"> Sale Of </span><br /> Rs.2999</p>
    </div>
    <div className="col-xl-4 sale-content my-auto">
      <p className="deal fs-6 fw-bold">DEAL OF THE WEAK</p>
      <h4 className="fs-2 fw-bold">Bags Collection</h4>
      <p className="time fs-1 fw-bold text-black mt-4">{timerDays} &nbsp;:&nbsp; {timerHours} &nbsp;:&nbsp; {timerMinutes} &nbsp;:&nbsp; {timerSeconds} </p>
      <p className="days">Days <span className="me-md-5 me-3"></span> Hours <span className="me-md-5 me-3"></span> Minutes <span className="me-md-5 me-3"></span> Seconds</p>
      <Button src='/' title='SHOP NOW'/>
    </div>
  </div>
  </section>

  {/* ---------------------- Instagram Section -------------------- */}

  <section className='instagram container'>
  <div className="row my-5">
    <img  className="img img-fluid col-lg-8 p-5" src="/images/insta-cloth.jpg" alt=""/>
    <div className='insta-content col-lg-4 my-auto'>
      <h5 className="fw-bold fs-2">Instagram</h5>
      <p className="mt-4 mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt laboriosam ducimus minus. Necessitatibus voluptatem expedita cumque.</p>
      <h2 className="fw-bold fs-2 mt-5">#NH_Fashion</h2>
    </div>
  </div>
  </section>
</div>
)
}

export default Home
