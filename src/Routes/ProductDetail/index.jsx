import React, { useState } from 'react'
import "../ProductDetail/productDetail.scss"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Button from '../../Components/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Trending from '../../Components/Carousel/Trending';

const ProductDetail = () => {

const [counter, setCounter] = useState(0);

const up = () => {
    setCounter(counter+1);
}
const down = () => {
  counter>0 && setCounter(counter-1); 
}

  return (
  <div className='product-detail'>


    <section className='product-detail-images'>
    <div className='container px-lg-5'>
      <p className='text-center pt-5'><Link to="/">Home</Link> <KeyboardArrowRightIcon sx={{ fontSize: 16, color:"black", marginTop:-0.5,}}/> <Link to="/products">Products</Link> <KeyboardArrowRightIcon sx={{ fontSize: 16, color:"black", marginTop:-0.5,}}/> Product Detail</p>
      <div className='row'>
        <div className='col-xl-2 col-sm-3 p-md-5 p-sm-4'>
          <img className='img-fluid' src="/images/clothing.webp" alt="" />
          <br/>
          <br/>
          <img className='img-fluid' src="/images/clothing.webp" alt="" />
          <br/>
          <br/>
          <img className='img-fluid' src="/images/clothing.webp" alt="" />
          <br/>
          <br/>
          <img className='img-fluid' src="/images/clothing.webp" alt="" />
        </div>
        <div className='col-sm-1'></div>
        <div className='col-xl-8 col-sm-8 p-xl-5 p-lg-3 d-flex align-items-center'>
          <img className='img-fluid' src="/images/clothing.webp" alt="" />
        </div>
      </div>
    </div>
    </section>


    <section className='product-detail-data d-block text-center my-5 py-5'>
      <h4 className='fs-3 fw-bold'>Biker Jacket</h4>
      <div className="d-flex justify-content-center">
          <StarIcon className="star" />
          <StarIcon className="star" />
          <StarIcon className="star" />
          <StarIcon className="star" />
          <StarIcon className="star" /> &nbsp;-&nbsp; 5 Reviews
      </div>
      <div className='d-flex my-3 justify-content-center'>
        <h5 className="fs-2 fw-bold mb-0">Rs.2999</h5> &nbsp; &nbsp; &nbsp;
        <p className='fs-5 fw-bold price mb-0 text-decoration-line-through'>Rs.3500</p>
      </div>
      <p className='text-black p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis distinctio, ipsum labore maiores cupiditate architecto? Aperiam, distinctio odio? Eveniet.</p>
      <div className='d-flex justify-content-center'>
        <div className='d-flex counter justify-content-end'>
          <p className='fs-6 fw-bold text-black mt-2'>{counter} &nbsp; &nbsp;</p>
          <div className='me-2 d-flex flex-column'>
            <KeyboardArrowUpIcon sx={{fontSize:20}} onClick={up}/>
            {/* <br /> */}
            <KeyboardArrowDownIcon sx={{fontSize:20}} onClick={down}/>
          </div>
        </div>
        &nbsp; &nbsp; &nbsp;
        <div><Button title="ADD TO CART"/></div>
      </div>
      <div className='checkout'>
        <h5 className='fs-5 fw-bold mt-5 mb-4'> <span className='px-4 bg-white'>Guranteed Safe Checkout</span></h5>
        <img src="/images/checkout.png" alt="" />
      </div>
      <p className='mt-5 mb-0 fw-bold'>SKU: <span className='text-black'>12345</span></p>
      <p className='mt-1 fw-bold'>Catagories: <span className='text-black'>Clothes</span></p>
    </section>

    
    <section className='container pb-5'>
       <Trending/>
    </section>


  </div>
  )
}

export default ProductDetail