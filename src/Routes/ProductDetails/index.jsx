import React from 'react'
import { useState,useEffect } from 'react'
import "../ProductDetails/productDetails.scss"
import Trending from '../../Components/Carousel/Trending'
import ProductDetail from '../../Components/ProductDetail/index'
import { Link, useLocation } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import axios from 'axios'

const ProductDetails = () => {

  

  return (
    <div>
      <div className="p-head py-5">
        <div className='container'>
          <h2 style={{ color: "#111111", fontWeight: "bold" }}>Product Detail</h2>
          <p className='mb-0'>
            <Link to="/productDetail">Home</Link> <KeyboardArrowRightIcon sx={{ fontSize: 16, color:"black", marginTop:-0.5,}}/><Link to="/products">Products</Link> <KeyboardArrowRightIcon sx={{ fontSize: 16, color:"black", marginTop:-0.5,}}/> Product Detail
          </p>
        </div>
      </div>

     
              
                <ProductDetail />
             

      {/* <Trending/> */}
    </div>
  )
}

export default ProductDetails
