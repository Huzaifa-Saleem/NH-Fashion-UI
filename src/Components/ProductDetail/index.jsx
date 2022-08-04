import React, { useState, useEffect} from 'react'
import "../ProductDetail/productDetail.scss"
import {Link, useLocation } from "react-router-dom";
// import StarIcon from "@mui/icons-material/Star";
import Button from '../Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios'
import ProductImage from '../Carousel/ProductImage';
import SizeModal from '../SizeChart';

const ProductDetail = () => {

const [counter, setCounter] = useState(0);

const up = () => {
    setCounter(counter+1);
}
const down = () => {
  counter > 0 && setCounter(counter-1); 
}

const location = useLocation();
const id = location.pathname.split("/")[2];

const [products, setProducts] = useState([]);

useEffect(() => {
  const getProducts = async () => {
    const res = await axios.get('http://localhost:4000/api/products/find/'+ id)
    setProducts(res.data);     
  };

  getProducts();
});

const [modalShow, setModalShow] = React.useState(false);

  return (
  <>  
  <div className='product-detail row'>

    <div className='col-md-1'></div>
    <section className='product-detail-images col-md-4'>
    <div>
      <div className='grid'>
        <div className='pt-lg-5 px-lg-4'>
          <ProductImage/>
        </div>
        {/* <div className='p-md-4 p-sm-4 row'>
          {products.img?.map(img => (
            <img className='img-fluid col-md-3' src={img} alt="" />
          ))}
        </div> */}
      </div>
    </div>
    </section>
    <section className='product-detail-data d-block mt-lg-5 pt-3 pt-xl-4 ms-sm-5 ms-4 ps-sm-5 col-md-6'>
      <h4 className='fs-3 fw-bold'>{products.title}</h4>
      {/* <div className="d-flex justify-content-center">
          <StarIcon className="star" />
          <StarIcon className="star" />
          <StarIcon className="star" />
          <StarIcon className="star" />
          <StarIcon className="star" /> &nbsp;-&nbsp; {products.reviewCount} Reviews
      </div> */}
      <div className='my-3'>
        <h5 className="fs-2 fw-bold mb-0">Rs. {products.price}</h5> &nbsp; &nbsp; &nbsp;
        {/* <p className='fs-5 fw-bold price mb-0 text-decoration-line-through'>Rs.3500</p> */}
      </div>

      <div className="fw-bold d-flex align-items-center mb-4">
      Size: &nbsp; &nbsp; {products.size?.map((size,index) => (
            <div key={index}>
              <input type="radio" id={size} name="fav_language" value={size}/>
              <label htmlFor={size}>{size}</label>
            </div>
          ))}
      </div>

      <h5 className='size fw-bold' onClick={() => setModalShow(true)}>Size Chart</h5>
      <SizeModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      />

      <div className="row mt-3 fw-bold d-flex align-items-center mt-4" style={{paddingLeft:12}}>
        Color: &nbsp; {products.color?.map((color,index) => (
            <div className='acc-color' style={{background: color}} key={index}></div>
          ))}
       </div>
      <div className='d-sm-flex'>
        <div className='d-flex counter justify-content-end'>
          <p className='fs-6 fw-bold text-black mt-2'>{counter} &nbsp; &nbsp;</p>
          <div className='me-2 d-flex flex-column'>
            <KeyboardArrowUpIcon sx={{fontSize:20}} onClick={up}/>
            {/* <br /> */}
            <KeyboardArrowDownIcon sx={{fontSize:20}} onClick={down}/>
          </div>
        </div>
        <div className='d-none d-sm-block'>&nbsp; &nbsp; &nbsp;</div>
        <div><Button title="ADD TO CART" src="/cart"/></div>
      </div>
      {/* <div className='checkout'>
        <h5 className='fs-5 fw-bold mt-5 mb-4'> <span className='px-4 bg-white'>Guranteed Safe Checkout</span></h5>
        <img src="/images/checkout.png" alt="" />
      </div> */}
      <div className='mt-4 pt-2'>
        {/* <p className='mb-1'>SKU: <span className='text-black'></span></p> */}
        {/* <p className='mb-1'>Catagory: <span className='text-black'>{products.categories}</span></p> */}
        {/* <p className='mb-1'>Tags: <span className='text-black'></span></p> */}
      </div>
      <div>
      </div>
      <div className='pro-desc text-start mt-5'>
        <h5 className='fw-bold text-black '>Product Description</h5>
        <p className='text-black mt-3 me-5'>{products.desc}</p>
      </div>
    </section>
    <div className='col-md-1'></div>
  </div>
  <div className='pro-desc1 text-start ms-sm-5 ms-4 me-sm-5 mb-5 mt-sm-5 mt-3 px-sm-4'>
    <h5 className='fw-bold text-black '>Product Description</h5>
    <p className='text-black mt-3 me-5'>{products.desc}</p>
  </div>
  </>
  )
}

export default ProductDetail
