import React from "react";
import StarIcon from "@mui/icons-material/Star";
import CircleIcon from "@mui/icons-material/Circle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import "./card.scss";

const Card = (props) => {
  return (
    <>
    
      <div className=" productCard">
        <div className="fav">
          <FavoriteBorderIcon className="heart"/>
        </div>
        <div className="img">
          <img src={props.img} alt="product" />
        </div>
        <div className="addToCart">
          <Link to="product">+ Add to Cart</Link>
        </div>
        <div className="title">
          <h4>{props.title}</h4>
        </div>
        
        <div className="rating d-flex">
          <StarIcon className="star" />
          <StarIcon className="star" />
          <StarIcon className="star" />
          <StarIcon className="star" />
          <StarIcon className="star" />
        </div>
        
          <div className="price ">
            <h3>${props.price}</h3>
          </div>
          <div className="color d-flex ">
            <CircleIcon style={{color:'#111'}} className="circle" />
            <CircleIcon style={{color:'tan'}} className="circle" />
            <CircleIcon style={{color:'gray'}} className="circle" />
          </div>
        </div>
      
    </>
  );
};

export default Card;
