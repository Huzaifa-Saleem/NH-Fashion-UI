import React from 'react'
import { Link } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
import Button from "../../Components/Button";
import { useSelector } from "react-redux";
import { CloseButton } from 'react-bootstrap';

const ConfirmOrder = () => {
  const cart = useSelector((state) => state.cart);
  
  return (
    <div>
      <div className="p-head py-5">
        <div className='container text-center'>
          <div className=' d-flex justify-content-center'>
            <h6><Link to='/cart' className='mb-0 text-black fw-bold'><span className='counts fs-5 fw-bold text-white'><DoneIcon sx={{marginTop:-0.5}}/></span> Cart</Link></h6>
            <div className='bar'></div>
            <h6><Link to='/checkout' className='mb-0 text-black fw-bold'><span className='counts fs-5 fw-bold text-white'><DoneIcon sx={{marginTop:-0.5}}/></span> Checkout</Link></h6>
            <div className='bar'></div>
            <h6><Link to='/payment' className='mb-0 text-black fw-bold'><span className='counts fs-5 fw-bold text-white'><DoneIcon sx={{marginTop:-0.5}}/></span> Payment </Link></h6>
            <div className='bar'></div>
            <h6 className='mb-0'><span className='count fs-5 fw-bold text-white'>4</span> Confirm Order</h6> 
          </div>
        </div>
      </div>
      <div className="container my-5 py-5">
          <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
              <div className="cart p-5">
                <img className='d-block mx-auto img-fluid' width={100} height="auto" src="/images/done.png" alt="done" />
                <h3 className='fs-3 fw-bold text-center text-black'>Your Order <br/> Has Been Placed</h3>
                <h6 className='fs-6 text-center mt-4'>If you have any query kindly contact us at the.logic.cipher@gmail.com </h6>
                <h6 className='fs-5 fw-bold text-center mt-4'>Thankyou for Choosing Us ! </h6>
                <div className='text-center'>
                <Button title="CONTINUE SHOPPING" src="/products"/>
                </div>
              </div>
            </div>
            <div className='col-md-3'></div>
          </div>
        </div>
    </div>
  )
}

export default ConfirmOrder
