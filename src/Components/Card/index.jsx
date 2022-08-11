import React from "react";
import StarIcon from "@mui/icons-material/Star";
import CircleIcon from "@mui/icons-material/Circle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import "../Card/card.scss";
import { useDispatch } from "react-redux";
import { addFavProduct, productFavRemoval } from "../../redux/favSlice";

const Card = (props) => {

  const dispatch = useDispatch()
  const products = props.product

  const handleFav = (e)=>{
    dispatch(addFavProduct({...products}))

  }

  return (
    <>
    
      <div className=" productCard">
        <div className="fav">
          <FavoriteBorderIcon onClick={handleFav} className="heart"/>
        </div>
        <Link to={`/productDetails/${props.id}`}>
          <div className="img">
          <img className="img-fluid" src={props.img} alt="product" />
        </div>
        </Link>
        <div className="addToCart">
          <Link className="cart" to="/cart">+ Add to Cart</Link>
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
            {props.col?.map((c)=>
            <CircleIcon style={{color:`${c}`}} key={c} className="circle" />
            )}

          </div>
        </div>
    </>
  );
};

export default Card;
