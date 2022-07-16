import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "./style.scss";
const Footer = () => {
  return (
    <>
      <footer className="container-fluid footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img className="logo" src="./images/logo-white.svg" alt="logo" />
              <p>
                The customer is at the heart of our unique business model, which
                includes design.
              </p>
              <img
                src="https://preview.colorlib.com/theme/malefashion/img/xpayment.png.pagespeed.ic.jyKRwIPdRp.png"
                alt="cards"
              />
            </div>
            <div className="col-md-4">
              <h4 className="">SHOPPING</h4>

              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/">Trending</Link>
              </li>
              <li>
                <Link to="/">Sale</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </div>
            <div className="col-md-4">
              <h4 className="newsletter">NEWSLETTER</h4>
              <p>
                Be the first to know about new arrivals, look books, sales &
                promos!
              </p>
              <div className="row">
                <div className="col-sm-6">
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="col-sm-6">
                  <SearchIcon className="icon"/>
                </div>
              </div>
            </div>
          </div>
          <br />
          <hr />
          {/* <br /> */}
          <div className="copyright">
            <p>Copyright © 2022 All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
