import React from "react";
import { useState } from "react";
import "../Cart/cart.scss";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";

const Cart = () => {
  const [counter, setCounter] = useState(0);

  const up = () => {
    setCounter(counter + 1);
  };
  const down = () => {
    counter > 0 && setCounter(counter - 1);
  };

  return (
    <div>
          <div className="cart-content d-flex me-0">
            <div className="col-md-5 row py-3 my-2">
              <div className="col-md-3">
                <img src="/images/clothing.webp" className="img-fluid" alt="" />
              </div>
              <div className="col-md-9 d-flex justify-content-center flex-column ">
                <p className="text-black ms-4 mb-2">Balloon Fit Jeans <span className="fw-bold"> &nbsp; -  &nbsp; XS </span></p>
                <h6 className="fs-5 fw-bold ms-4 mb-0">Rs. 150</h6>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center  justify-content-center">
              <div className="d-flex counter">
                <KeyboardArrowLeftIcon sx={{ fontSize: 25 }} onClick={down} />
                <p className="fs-5 fw-bold text-black mx-3 mb-0 text-center">
                  {counter}
                </p>
                <KeyboardArrowRightIcon sx={{ fontSize: 25 }} onClick={up} />
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <h5 className="fs-5 fw-bold m-0">Rs. 150</h5>
            </div>
            <div className="col-md-1 pe-3 d-flex align-items-center justify-content-end">
              <div className="close d-flex align-items-center justify-content-center">
                <CloseIcon sx={{ fontSize: 20 }} />
              </div>
            </div>
          </div>
    </div>
  );
};

export default Cart;
