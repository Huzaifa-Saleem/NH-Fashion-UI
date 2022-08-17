import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <div className="p-head py-5">
        <div className="container text-center">
          <div className=" d-flex justify-content-center">
            <h6>
              <Link to="/cart" className="mb-0 text-black fw-bold">
                <span className="counts fs-5 fw-bold text-white">
                  <DoneIcon sx={{ marginTop: -0.5 }} />
                </span>{" "}
                Cart
              </Link>
            </h6>
            <div className="bar"></div>
            <h6 className="mb-0">
              <span className="count fs-5 fw-bold text-white">2</span> Checkout
            </h6>
            <div className="bar"></div>
            <h6 className="mb-0">
              <span className="count fs-5 fw-bold text-white">3</span> Payment{" "}
            </h6>
            <div className="bar"></div>
            <h6 className="mb-0">
              <span className="count fs-5 fw-bold text-white">4</span> Confirm
              Order
            </h6>
          </div>
        </div>
      </div>
      <div>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="d-flex flex-column col-md-8">
              <h6 className="fw-bold fs-6 mb-2">INFORMATION</h6>
              <form>
                <div className="d-flex justify-content-between">
                  <div className="form-group">
                    <label htmlFor="username">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First Name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group col-md-12">
                  <label id="address">Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    required
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <div className="form-group">
                    <label htmlFor="city">City Name*</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="City Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="postalCode">Postal Code *</label>
                    <input
                      type="number"
                      id="postalCode"
                      name="postalCode"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      placeholder="Postal Code"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="postalCode">Phone Number *</label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="d-flex ">
                  <div className="form-group col-md-12">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <Button title="RETURN TO CART" src="/addToCart" />
              </form>
            </div>

            <div className="col-md-4">
              <h6 className="fw-bold fs-6 ms-5">PAYMENT</h6>
              <div className="cart p-5 ms-5 mt-4">
                <h6 className="fw-bold fs-6 mb-5">CART TOTAL</h6>
                <div className="d-flex justify-content-between">
                  <p className="fs-6 text-black">SubTotal</p>
                  <h5 className="fs-5 fw-bold">$ {cart.total}</h5>
                </div>
                <div className="d-flex total justify-content-between ">
                  <p className="fs-6 text-black mb-2">Shipping</p>
                  <h5 className="fs-5 fw-bold mb-2">$ 100</h5>
                </div>
                <hr />
                <div className="d-flex justify-content-between mt-4">
                  <p className="fs-6 text-black mb-0">Total</p>
                  <h5 className="fs-5 fw-bold mb-0">$ {cart.total + 100}</h5>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <Button title="CONTINUE PAYMENT" src="/payment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
