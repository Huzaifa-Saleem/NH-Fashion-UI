import React from "react";
import Home from "./Routes/Home/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Products from "./Routes/Products"
import Contact from "./Routes/Contact"
import Authentication from "./Routes/Authentication";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProductDetails from "./Routes/ProductDetails";
const App = () => {
  return (
    
      <Router>
        <Header/>
        <Navbar/>
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/authentication" element={<Authentication />} />
          <Route exact path="/products/:cat/:value" element={<Products/>} />
          <Route exact path="/products/:fil" element={<Products/>} />
          <Route exact path="/products" element={<Products/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/productDetails/:id" element={<ProductDetails/>} />
      </Routes>
      <Footer/>
      </Router>

    
  );
};

export default App;
