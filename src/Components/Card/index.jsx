import React from "react";
import StarIcon from "@mui/icons-material/Star";
import CircleIcon from "@mui/icons-material/Circle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import "../Card/card.scss";
import { useDispatch, useSelector } from "react-redux";
import { addFavProduct, productFavRemoval } from "../../redux/favSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Card = (props) => {
  const dispatch = useDispatch();
  const products = props.product;
  const fav = useSelector((state) => state.fav);

  const handleFav = (e) => {
    dispatch(addFavProduct({ ...products }));
    window.alert("Product has been added to wishlist");
  };
  // if(fav._id.includes(products._id)){
  //   console.log('yes its working')
  // }

  // fav.products.map((p)=>{
  //   if(p._id){

  //   }
  // })
// fav.products.includes(props._id) 
if(products === fav.products){
  console.log(true);
}


  return (
    <>
      <div className=" productCard">
        <div className="fav">
           {/* {abc._id.includes(products._id) ? ( */}
            <FavoriteBorderIcon onClick={handleFav} className="heart" />
            {/* ):( */}
              {/* <FavoriteIcon/> */}
            {/* )} */}
           
        </div>
        <Link to={`/productDetails/${props.id}`}>
          <div className="img">
            <img className="img-fluid" src={props.img} alt="product" />
          </div>
        </Link>
        <div className="addToCart">
          <Link className="cart" to="/cart">
            + Add to Cart
          </Link>
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
          {props.col?.map((c) => (
            <CircleIcon style={{ color: `${c}` }} key={c} className="circle" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
