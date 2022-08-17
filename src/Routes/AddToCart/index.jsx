import React, {useEffect, useState} from "react";
import Cart from "../../Components/Cart";
import { Link } from "react-router-dom";
import "../AddToCart/addToCart.scss";
import Button from "../../Components/Button";
import { useSelector } from "react-redux";

const AddToCart = () => {

  const cart = useSelector((state) => state.cart);

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
                <Button title="PROCEED TO CHECKOUT" src="/checkout" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
