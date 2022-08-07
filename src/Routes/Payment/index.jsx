import React from 'react'
import Button from '../../Components/Button'
import { Link } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';

const Payment = () => {
  return (
    <div>
      <div className="p-head py-5">
        <div className='container text-center'>
          <div className=' d-flex justify-content-center'>
            <h6><Link to='/cart' className='mb-0 text-black fw-bold'><span className='counts fs-5 fw-bold text-white'><DoneIcon sx={{marginTop:-0.5}}/></span> Cart</Link></h6>
            <div className='bar'></div>
            <h6><Link to='/checkout' className='mb-0 text-black fw-bold'><span className='counts fs-5 fw-bold text-white'><DoneIcon sx={{marginTop:-0.5}}/></span> Checkout</Link></h6>
            <div className='bar'></div>
            <h6 className='mb-0'><span className='count fs-5 fw-bold text-white'>3</span> Payment </h6>
            <div className='bar'></div>
            <h6 className='mb-0'><span className='count fs-5 fw-bold text-white'>4</span> Confirm Order</h6> 
          </div>
        </div>
      </div>
      <Button title='CONFIRM ORDER' src='/confirmOrder'/>
    </div>
  )
}

export default Payment
