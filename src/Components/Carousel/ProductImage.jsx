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


function ProductImage(props) {


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
        {props.products.img?.map((img,index) => (
            <img
            className="d-block w-100"
            src={img} key={index} alt='product-img'
          />
        ))}
      </Slider>
  );
}

export default ProductImage;
