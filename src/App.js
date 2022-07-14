import React from "react";
import Home from "./Routes/Home/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;
