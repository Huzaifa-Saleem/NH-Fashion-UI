import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import WishlistCard from '../../Components/WishlistCard';

const Wishlist = () => {
  return (
    <div className='mb-5 pb-5'>
      <div className="mb-4">
        <div className="p-head text-center py-5">
        <h6 className="deal fs-6 fw-bold text-center">NH FASHION</h6>
        <h3 className='text-center fs-2 fw-bold text-black mt-2 '>My Wishlist</h3>
        </div>
      </div>

      <WishlistCard/>
      <WishlistCard/>

    <Link to='/'><p className='text-black text-center fs-6 mt-5'>Share my wishlist on &nbsp; <WhatsAppIcon/></p></Link>
    </div>
  )
}

export default Wishlist
