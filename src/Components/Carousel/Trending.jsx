import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "../Carousel/trending.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Card from "../Card";


const Trending = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('http://localhost:4000/api/products')
      setProducts(res.data);     
    };
  
    getProducts();
  });  

    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1224,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 390,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="slider banner-carousel banner-carousel-1 mb-0">
        <div className="text-center">
          <h6 className="deal fs-6 fw-bold mt-5 mb-3">NH FASHION</h6>
          <h2 className="fs-1 fw-bold text-black">Trending Products</h2></div>
        <Slider {...settings} className="ms-sm-5 ms-3 cards py-5">
        {products?.map((val) => {
              return (
                <Card className="img-fluid"
                  key={val._id}
                  id={val._id}
                  img={val.img}
                  title={val.title}
                  price={val.price}
                />
              );
            })}
        </Slider>
      </div>
    );
  }


export default Trending