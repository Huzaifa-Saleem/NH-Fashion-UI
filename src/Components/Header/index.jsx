import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../Header/header.scss";
import useWindowDimensions from "../../Hooks/Windowsdimension";
import Modal from "../../Hooks/Modal/index";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import { productRemoval } from "../../redux/cartSlice";
const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.currentUser);
  const [modalShow, setModalShow] = React.useState(false);
  //window width
  const { width, } = useWindowDimensions();
  const handleClick = (e) =>{
    e.preventDefault()
    dispatch(logout())
    dispatch(productRemoval())

  }

  return (
    <div>
      <div className="head">
        <div className="">
          <div className="header">
            <div className="header-content">
              <p>Free shipping, 30-days return or refund guarentee.</p>
            </div>
            <div className="nav-link">
              <ul>
                {user ? (
                  <li>
                    <Link to="/" onClick={handleClick} className="link">
                      LOGOUT
                    </Link>
                  </li>
                ) : (
                  <>
                    <li>
                      {width > 1020 ? (
                        <Link
                          to="/"
                          onClick={() => setModalShow(true)}
                          className="link"
                        >
                          LOG IN
                        </Link>
                      ) : (
                        <Link to="/authentication" className="link">
                          LOG IN
                        </Link>
                      )}
                    </li>
                    <span></span>
                    <li>
                      {width > 1020 ? (
                        <Link
                          to="/"
                          onClick={() => setModalShow(true)}
                          className="link"
                        >
                          SIGN UP
                        </Link>
                      ) : (
                        <Link to="/authentication" className="link">
                          SIGN UP
                        </Link>
                      )}
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Modal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Header;
