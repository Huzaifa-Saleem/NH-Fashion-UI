import React from "react";
import Home from "./Routes/Home/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Routes/Products";
import Contact from "./Routes/Contact";
import Authentication from "./Routes/Authentication";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProductDetails from "./Routes/ProductDetails";
import AddToCart from "./Routes/AddToCart";
import Checkout from "./Routes/Checkout";
import Payment from "./Routes/Payment";
import ConfirmOrder from "./Routes/ConfirmOrder";
import Wishlist from "./Routes/Wishlist";
import Success from "./Routes/Success/Success";
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <ToastContainer/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="authentication" element={<Authentication />} />
        <Route exact path="/products/:cat/:value" element={<Products />} />
        <Route exact path="/products/:fil" element={<Products />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/productDetails/:id" element={<ProductDetails />} />
        <Route exact path="/cart" element={<AddToCart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/confirmOrder" element={<ConfirmOrder />} />
        <Route exact path="/wishlist" element={<Wishlist />} />
        <Route exact path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
