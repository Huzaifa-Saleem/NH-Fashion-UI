import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';

const Checkout = () => {
  return (
    <div>
      <div className="p-head py-5">
        <div className='container text-center'>
          <div className=' d-flex justify-content-center'>
            <h6><Link to='/cart' className='mb-0 text-black fw-bold'><span className='counts fs-5 fw-bold text-white'><DoneIcon sx={{marginTop:-0.5}}/></span> Cart</Link></h6>
            <div className='bar'></div>
            <h6 className='mb-0'><span className='count fs-5 fw-bold text-white'>2</span> Checkout</h6>
            <div className='bar'></div>
            <h6 className='mb-0'><span className='count fs-5 fw-bold text-white'>3</span> Payment </h6>
            <div className='bar'></div>
            <h6 className='mb-0'><span className='count fs-5 fw-bold text-white'>4</span> Confirm Order</h6> 
          </div>
        </div>
      </div>
      <Button title='CONTINUE PAYMENT' src='/payment'/>
    </div>
  )
}

export default Checkout
