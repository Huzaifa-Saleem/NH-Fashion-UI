import React from "react";
import Home from "./Routes/Home/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./Routes/Products";
import Contact from "./Routes/Contact";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/contact" element={<Contact />} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;
