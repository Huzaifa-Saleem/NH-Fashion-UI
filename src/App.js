import React from "react";
import Home from "./Routes/Home/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import LogIn from "./Routes/LogIn";
import SignUp from "./Routes/SignUp"
import Products from "./Routes/Products"
import Contact from "./Routes/Contact"
import Register from "./Routes/Register";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
const App = () => {
  return (
    
      <Router>
        <Header/>
        <Navbar/>
        <Footer/>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          {/* <Route exact path="/logIn" element={<LogIn />} /> */}
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/products" element={<Products/>} />
          <Route exact path="/contact" element={<Contact/>} />
      </Routes>
      </Router>
    
  );
};

export default App;
