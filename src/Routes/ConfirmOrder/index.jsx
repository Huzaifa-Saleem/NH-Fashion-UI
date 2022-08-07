import React from 'react'
import { Link } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';

const ConfirmOrder = () => {
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
    </div>
  )
}

export default ConfirmOrder
