import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
const Footer = () => {
  return (
    <>
    <footer className="container-fluid footer">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <img className='logo' src="./images/logo-white.svg" alt="logo" />
                    <p>The customer is at the heart of our unique business model, which includes design.</p>
                    <img src="https://preview.colorlib.com/theme/malefashion/img/xpayment.png.pagespeed.ic.jyKRwIPdRp.png" alt="cards" />
                </div>
                <div className="col-md-3">
                    <h4>Shopping</h4>
                    
                    <li><Link to='/'>Products</Link></li>
                    <li><Link to='/'>Trending</Link></li>
                    <li><Link to='/'>Sale</Link></li>
                    <li><Link to='/'>Contact Us</Link></li>
                
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer