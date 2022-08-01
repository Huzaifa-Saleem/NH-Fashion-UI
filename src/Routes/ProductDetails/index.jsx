import React from 'react'
import { useState,useEffect } from 'react'
import "../ProductDetails/productDetails.scss"
import Trending from '../../Components/Carousel/Trending'
import ProductDetail from '../../Components/ProductDetail/index'
import { Link, useLocation } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import axios from 'axios'

const ProductDetails = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.create.get('http://localhost:4000/api/products/find/' + id)
      setPosts(res.data);     
    };

    getProducts();
  }, []);

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

      {posts.map((val) => {
              return (
                <ProductDetail 
                  key={val.id}
                  id={val.id}
                  img0={val.img[0]}
                  img1={val.img[1]}
                  img2={val.img[2]}
                  img3={val.img[3]}
                  {... val}
                />
              );
            })}

      <Trending/>
    </div>
  )
}

export default ProductDetails
