import React from "react";
import Home from "./Routes/Home/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    
      <Router>
        <Header/>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
      </Routes>
      </Router>
    
  );
};

export default App;
