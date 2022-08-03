import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from "react-slick";
import "../Carousel/trending.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, borderRadius:50, background: "black", marginRight:-15 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, borderRadius:50, background: "black", marginLeft:-15 }}
      onClick={onClick}
    />
  );
}


function ProductImage() {

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

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
  // pauseOnHover: true,
};
  return (
      <Slider {...settings}>
        {products.img?.map(img => (
            <img
            className="d-block w-100"
            src={img}
          />
        ))}
      </Slider>
  );
}

export default ProductImage;
