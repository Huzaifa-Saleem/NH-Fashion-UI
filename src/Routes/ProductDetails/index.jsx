import React from 'react'
import "../ProductDetails/productDetails.scss"
import Trending from '../../Components/Carousel/Trending'
import ProductDetail from '../../Components/ProductDetail/index'
import { Link} from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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

      <section className='my-5'>
       <ProductDetail/>
      </section> 

      <section className='container my-5 py-4'>
        <Trending/>
      </section>

    </div>
  )
}

export default ProductDetails
