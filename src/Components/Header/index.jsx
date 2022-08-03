import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../Header/header.scss";
import useWindowDimensions from "../../Hooks/Windowsdimension";
import Modal from '../../Hooks/Modal/index'
import Authentication from "../../Routes/Authentication";

const Header = () => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  //window width
  const { width, height } = useWindowDimensions();

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
                <li>
                  {width > 1020 ? (
                    <Link to="/" onClick={() => setModalShow(true)} className="link">
                      LOG IN
                    </Link>
                  ) : (
                    <NavLink to="/authentication" className="link">
                      LOG IN
                    </NavLink>
                  )}
                </li>
                <span></span>
                <li>
                {width > 1020 ? (
                    <Link to="/" onClick={() => setModalShow(true)} className="link">
                      SIGN UP
                    </Link>
                  ) : (
                    <NavLink to="/authentication" className="link">
                      SIGN UP
                    </NavLink>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      
    </div>
  );
};

export default Header;
