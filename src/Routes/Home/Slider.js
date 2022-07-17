import React, { Component, useEffect} from "react";
import Slider from "react-slick";
import Button from "../../Components/Button";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default class PauseOnHover extends Component {
 
  render() {
    var settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };

    return (
      <div className="banner-carousel banner-carousel-1 mb-0 ">
        <Slider {...settings}>
          <div>
          <div className='slider'>
        <div className='slider-content col-md-6 container'>
          <h5>SUMMER COLLECTION</h5>
          <h1 className='my-4'> <b> <span> Celebrate </span><br /> Summer - 2022 </b></h1>
          <p className='mb-4'>A specialist label creating luxury essentials. Ethically crafted <br /> with an unwavering commitment to exceptional quality.</p>
          <Button link='/' title='SHOP NOW'/>
          <div className="icons">
            <ul>
                <li><FacebookIcon/></li>
                <li><InstagramIcon/></li>
                <li><PinterestIcon/></li>
                <li><LinkedInIcon/></li>
            </ul>
          </div>

        </div>
      </div>
          </div>
  
          <div>
          <div className='slider'>
        <div className='slider-content col-md-6'>
          <h5>EID COLLECTION</h5>
          <h1 className='my-4'> <b> <span> Celebrate </span><br /> Summer - 2022 </b></h1>
          <p className='mb-4'>A specialist label creating luxury essentials. Ethically crafted <br /> with an unwavering commitment to exceptional quality.</p>
          <Button link='/' title='SHOP NOW'/>
          <div className="icons">
            <ul>
                <li><FacebookIcon/></li>
                <li><InstagramIcon/></li>
                <li><PinterestIcon/></li>
                <li><LinkedInIcon/></li>
            </ul>
          </div>
        </div>
      
      </div>
          </div>
        </Slider>
      </div>
    );
  }
}