import React, {useEffect, useState} from "react";
import Cart from "../../Components/Cart";
import { Link } from "react-router-dom";
import "../AddToCart/addToCart.scss";
import Button from "../../Components/Button";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import {userRequest} from "../../redux/requestMethods";
import { useNavigate } from "react-router-dom";

const KEY = "pk_test_51LVDHLAqGbI5WtKTFLofZqCHZcu7quyAXHXuk0N1UHClvxO2Vi9pan8oGrGfUpcNuJfFSTOcPrGcoOrM1BDQYnUd00K6Jm5v6c"

const AddToCart = () => {

  const cart = useSelector((state) => state.cart);

  const [stripeToken, setStripeToken] =useState(null)

  const navigate = useNavigate();

  const onToken = (token) => {
     setStripeToken(token);
  }

  useEffect(() => {
    const makeRequest = async () => {
      try{
const res = await userRequest.post ("/checkout/payment",{
  tokenId: stripeToken.id,
  amount: cart.total*100
});
navigate.push("/success", {data:res.data});
      }
      catch{

      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total,navigate])

  return (
    <div>
      <div className="p-head py-5">
        <div className="container text-center">
          <div className=" d-flex justify-content-center">
            <h6 className="mb-0">
              <span className="count fs-5 fw-bold text-white">1</span> Cart
            </h6>
            <div className="bar"></div>
            <h6 className="mb-0">
              <span className="count fs-5 fw-bold text-white">2</span> Checkout
            </h6>
            <div className="bar"></div>
            <h6 className="mb-0">
              <span className="count fs-5 fw-bold text-white">3</span> Payment
            </h6>
            <div className="bar"></div>
            <h6 className="mb-0">
              <span className="count fs-5 fw-bold text-white">4</span> Confirm
              Order
            </h6>
          </div>
        </div>
      </div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-8">
            <div className="cart-head row pb-3 me-0">
              <h6 className="fw-bold fs-6 col-md-5">PRODUCT</h6>
              <h6 className="fw-bold fs-6 col-md-3 text-center">QUANTITY</h6>
              <h6 className="fw-bold fs-6 col-md-3 text-center">TOTAL</h6>
              <div className="col-md-1"></div>
            </div>
            {cart.products?.map((product) => (
              <Cart
                product={product}
                img={product.img}
                title={product.title}
                price={product.price * product.counter}
                counter={product.counter}
                size={product.size}
              />
            ))}
            <div className="mt-3">
              <Button title="CONTINUE SHIPPING" src="/products" />
            </div>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold fs-6 ms-5">PAYMENT</h6>
            <div className="cart p-5 ms-5 mt-4">
              <h6 className="fw-bold fs-6 mb-5">CART TOTAL</h6>
              <div className="d-flex justify-content-between">
                <p className="fs-6 text-black">SubTotal</p>
                <h5 className="fs-5 fw-bold">$ {cart.total}</h5>
              </div>
              <div className="d-flex total justify-content-between ">
                <p className="fs-6 text-black mb-2">Shipping</p>
                <h5 className="fs-5 fw-bold mb-2">$ 100</h5>
              </div>
              <hr />
              <div className="d-flex justify-content-between mt-4">
                <p className="fs-6 text-black mb-0">Total</p>
                <h5 className="fs-5 fw-bold mb-0">$ {cart.total + 100}</h5>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <StripeCheckout
                  name="Three Comma Co."
                  description="Big Data Stuff" 
                  // image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" 
                  // ComponentClass="div"
                  // panelLabel="Give Money" 
                  amount={cart.total*100} 
                  // currency="USD"
                  // stripeKey="..."
                  // locale="zh"
                  // email="info@vidhub.co"
                  shippingAddress
                  billingAddress
                  // zipCode={false}
                  // alipay 
                  // bitcoin 
                  // allowRememberMe 
                  token={onToken} 
                  stripeKey={KEY}
                  // opened={this.onOpened} 
                  // closed={this.onClosed} 
                  // reconfigureOnUpdate={false}
                  // triggerEvent="onTouchTap"
                >
                  <button>CHECKOUT</button>
                  {/* <Button title="PROCEED TO CHECKOUT" src="" /> */}
                </StripeCheckout>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
