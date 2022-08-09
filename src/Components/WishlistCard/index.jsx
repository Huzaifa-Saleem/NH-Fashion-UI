import React from 'react'
import CloseIcon from "@mui/icons-material/Close";
import { Link } from 'react-router-dom';

const WishlistCard = () => {
  return (
    <div>
      <div className='container'>
          <div className="cart-content d-flex me-0 p-4">
            <div className='col-md-1'></div>
            <div className="col-md-3 justify-content-start row">
                <Link to='/'><img src="/images/clothing.webp" className="img-fluid col-md-6" alt="" /></Link>
                <div></div>
            </div>
              <div className="col-md-4 d-flex justify-content-center align-items-center flex-column ">
                <Link to='/'><p className="text-black ms-4 mb-2">Balloon Fit Jeans <span className="fw-bold"> &nbsp; -  &nbsp; XS </span></p></Link>
                <h6 className="fs-5 fw-bold ms-4 mb-0">Rs. 150</h6>
              </div>
            <div className="col-md-3 pe-3 d-flex align-items-center justify-content-end">
              <div className="close d-flex align-items-center justify-content-center">
                <CloseIcon sx={{ fontSize: 20 }} />
              </div>
            </div>
            <div className='col-md-1'></div>
          </div>
    </div>
    </div>
  )
}

export default WishlistCard
