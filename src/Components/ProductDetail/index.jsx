import React, { useState} from 'react'
import "../ProductDetail/productDetail.scss"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Button from '../Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ProductDetail = (props) => {

const [counter, setCounter] = useState(0);

const up = () => {
    setCounter(counter+1);
}
const down = () => {
  counter > 0 && setCounter(counter-1); 
}

  return (
    
  <div className='product-detail row'>

    <div className='col-lg-1'></div>
    <section className='product-detail-images col-lg-4'>
    <div>
      <div>
        <div className='pt-lg-5 px-lg-5'>
          <img className='img-fluid' src={props.img0} alt="" />
        </div>
        <div className='p-md-5 p-sm-4 row'>
          <img className='img-fluid col-md-3' src={props.img0} alt="" />
    
          <img className='img-fluid col-md-3' src={props.img1} alt="" />

          <img className='img-fluid col-md-3' src={props.img2} alt="" />

          <img className='img-fluid col-md-3' src={props.img3} alt="" />
        </div>
      </div>
    </div>
    </section>

    <section className='product-detail-data d-block text-center my-auto py-5 col-lg-6'>
      <h4 className='fs-3 fw-bold'>{props.title}</h4>
      <div className="d-flex justify-content-center">
          <StarIcon className="star" />
          <StarIcon className="star" />
          <StarIcon className="star" />
          <StarIcon className="star" />
          <StarIcon className="star" /> &nbsp;-&nbsp; {props.reviewCount} Reviews
      </div>
      <div className='d-flex my-3 justify-content-center'>
        <h5 className="fs-2 fw-bold mb-0">Rs. {props.price}</h5> &nbsp; &nbsp; &nbsp;
        <p className='fs-5 fw-bold price mb-0 text-decoration-line-through'>Rs.3500</p>
      </div>
      <div className="container row d-flex justify-content-center">
              <div className="acc-size">XS</div>
              <div className="acc-size">S</div>
              <div className="acc-size">M</div>
              <div className="acc-size">L</div>
              <div className="acc-size">XL</div>
              <div className="acc-size">XXL</div>
      </div>
      <div className="container row d-flex justify-content-center mt-3">
                <div className="acc-color"></div>
                <div className="acc-color"></div>
                <div className="acc-color"></div>
                <div className="acc-color"></div>
                <div className="acc-color"></div>
                <div className="acc-color"></div>
                <div className="acc-color"></div>
       </div>
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
    </section>
    <div className='col-lg-1'></div>

  </div>
  )
}

export default ProductDetail
