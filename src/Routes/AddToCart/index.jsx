import React from 'react'
import Cart from '../../Components/Cart'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '../../Components/Button';

const AddToCart = () => {
  return (
    <div>
      <div className="p-head py-5">
        <div className='container'>
          <h2 style={{ color: "#111111", fontWeight: "bold" }}>Product Detail</h2>
          <p className='mb-0'>
            <Link to="/">Home</Link> <KeyboardArrowRightIcon sx={{ fontSize: 16, color:"black", marginTop:-0.5,}}/><Link to="/products">Products</Link> <KeyboardArrowRightIcon sx={{ fontSize: 16, color:"black", marginTop:-0.5,}}/> Add To Cart
          </p>
        </div>
      </div>
<div className="container my-5 py-5">
<div className="row">
        <div className="col-md-8">
          <div className="cart-head row pb-3 me-0">
            <h6 className="fw-bold fs-6 col-md-5">PRODUCT</h6>
            <h6 className="fw-bold fs-6 col-md-3 text-center">QUANTITY</h6>
            <h6 className="fw-bold fs-6 col-md-3 text-center">TOTAL</h6>
            <div className="col-md-1"></div>
          </div>
<Cart/>
<Cart/>
          <div className='mt-3'><Button title="CONTINUE SHIPPING" src="/products"/></div>
        </div>
        <div className="col-md-4">
        <h6 className="fw-bold fs-6 ms-5">PAYMENT</h6>
        <div className="cart p-5 ms-5 mt-4">
        <h6 className="fw-bold fs-6 mb-5">CART TOTAL</h6>
            <div className="d-flex justify-content-between">
              <p className="fs-6 text-black">SubTotal</p>
              <h5 className="fs-5 fw-bold">Rs. 150</h5>
            </div>
            <div className="d-flex total justify-content-between ">
              <p className="fs-6 text-black mb-2">Shipping</p>
              <h5 className="fs-5 fw-bold mb-2">Rs. 100</h5>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-4">
              <p className="fs-6 text-black mb-0">Total</p>
              <h5 className="fs-5 fw-bold mb-0">Rs. 250</h5>
            </div>
            <div className='d-flex justify-content-center mt-4'>
              <Button title="PROCEED TO CHECKOUT" src="/checkout"/>
            </div>
        </div>
        </div>
      </div>
</div>



    </div>
  )
}

export default AddToCart
