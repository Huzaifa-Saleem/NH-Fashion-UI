import React, { useState, useEffect} from 'react'
import "../ProductDetail/productDetail.scss"
import {Link, useLocation } from "react-router-dom";
import Button from '../Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios'
import ProductImage from '../Carousel/ProductImage';
import SizeModal from '../SizeChart';

const ProductDetail = () => {

const [counter, setCounter] = useState(0);
const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true)
    const res = await axios.get('http://localhost:4000/api/products/find/'+ id)
    setProducts(res.data);     
  };

  getProducts();
  setIsLoading(false)
},[id]);

const [modalShow, setModalShow] = React.useState(false);


if (isLoading) {
  return (
    <div className="text-center loader">
      <div className="spinner-border ">
        <span className="sr-only "></span>
      </div>
    </div>
  );
}
  return (
    
  <div className='product-detail row'>

    <div className='col-lg-1'></div>
    <section className='product-detail-images col-lg-4'>
    <div>
      <div>
        <div className='pt-lg-5 px-lg-4'>
          <ProductImage products={products}/>
        </div>
        
      </div>
    </div>
    </section>
    <section className='product-detail-data d-block mt-5 pt-4 ms-5 ps-5 col-lg-6'>
      <h4 className='fs-3 fw-bold'>{products.title}</h4>
      
      <div className='my-3'>
        <h5 className="fs-2 fw-bold mb-0">Rs. {products.price}</h5> &nbsp; &nbsp; &nbsp;
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
      <div className='d-flex'>
        <div className='d-flex counter justify-content-end'>
          <p className='fs-6 fw-bold text-black mt-2'>{counter} &nbsp; &nbsp;</p>
          <div className='me-2 d-flex flex-column'>
            <KeyboardArrowUpIcon sx={{fontSize:20}} onClick={up}/>
            {/* <br /> */}
            <KeyboardArrowDownIcon sx={{fontSize:20}} onClick={down}/>
          </div>
        </div>
        &nbsp; &nbsp; &nbsp;
        <div><Button title="ADD TO CART"/></div>
      </div>
      <div className='mt-4 pt-2'>
      </div>
      <div>
      </div>
      <div className='text-start mt-5'>
        <h5 className='fw-bold text-black '>Product Description</h5>
        <p className='text-black mt-3 me-5'>{products.desc}</p>
      </div>
    </section>
    <div className='col-lg-1'></div>
  </div>
  )
}

export default ProductDetail
