import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest, TOKEN } from "../../redux/requestMethods";
import axios from "axios";

const Payment = () => {
  const cart = useSelector((state) => state.cart);

  const initialValues = {
    paymentMethod: "",
    addressMethod: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  };

  const [formValue, setFormValue] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValue));
    setIsSubmit(true);

    isSubmit && navigate("/confirmOrder");
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = new RegExp(/^[0-9\b]+$/);

    if (values.addressMethod === "") {
      errors.addressMethod = "Choose Address Option!";
    }
    if (values.paymentMethod === "") {
      errors.paymentMethod = "Choose Payment Method!";
    }
    if (!values.address) {
      errors.address = "Enter Your Address!";
    }
    if (!values.city) {
      errors.city = "Enter Your City!";
    }
    if (!values.postalCode) {
      errors.postalCode = "Enter Your Postal Code!";
    }
    if (!values.phone) {
      errors.phone = "Enter Your phone Number!";
    } else if (!regex.test(values.phone)) {
      errors.phone = "You Can Enter Only Number!";
    } else if (values.phone.length != 11) {
      errors.phone = "Enter a valid Phone Number!";
    }
    return errors;
  };

  const [showAddress, setShowAddress] = useState("");
  const [showForm, setShowForm] = useState("");

  const KEY =
    "pk_test_51LVDHLAqGbI5WtKTFLofZqCHZcu7quyAXHXuk0N1UHClvxO2Vi9pan8oGrGfUpcNuJfFSTOcPrGcoOrM1BDQYnUd00K6Jm5v6c";

  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        // const res = await userRequest.post ("/checkout/payment", {
        const res = await axios.post(
          "http://localhost:4000/api/checkout/payment",
          {
            header: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTY1ZmYzMWQ3YWUyYTJkMzQ4YzkwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDE0MDk1OCwiZXhwIjoxNjYwNDAwMTU4fQ.78Re6BbgX1UIC3RkPIWHhx94s2-U0euiTwWkNYXFo34",
            },
            tokenId: stripeToken.id,
            amount: cart.total * 100,
          }
        );
        navigate.push("/success", { data: res.data });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);

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
            <h6>
              <Link to="/checkout" className="mb-0 text-black fw-bold">
                <span className="counts fs-5 fw-bold text-white">
                  <DoneIcon sx={{ marginTop: -0.5 }} />
                </span>{" "}
                Checkout
              </Link>
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
      <div className="container my-5 py-5">
        <div className="row">
          <div className="d-flex flex-column col-md-8">
            <h6 className="fw-bold fs-6 mb-2">PAYMENT METHOD</h6>

            <div className="p-3 border mt-3">
              <form action="" onSubmit={onSubmit}>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input mb-0"
                    type="radio"
                    name="paymentMethod"
                    id="flexRadioDefault1"
                    value="cashOnDelivery"
                    onChange={handleChange}
                    checked={formValue.paymentMethod === "cashOnDelivery"}
                    onClick={() => setShowAddress(true)}
                  />
                  <label
                    class="form-check-label mt-0 fs-6"
                    for="flexRadioDefault1"
                  >
                    Cash On Delivery
                  </label>
                </div>
                <div>
                  {showAddress && (
                    <div className="p-3">
                      <div class="form-check mb-2">
                        <input
                          class="form-check-input mb-0"
                          type="radio"
                          name="addressMethod"
                          id="flexRadio1"
                          value="sameAddress"
                          onChange={handleChange}
                          checked={formValue.addressMethod === "sameAddress"}
                          onClick={() => setShowForm(false)}
                        />
                        <label
                          class="form-check-label mt-0 fs-6"
                          for="flexRadio1"
                        >
                          Billing Address will be same as Shipping Address
                        </label>
                      </div>
                      <div></div>
                      <div class="form-check">
                        <input
                          class="form-check-input mb-0"
                          type="radio"
                          name="addressMethod"
                          id="flexRadio2"
                          value="diffAddress"
                          onChange={handleChange}
                          checked={formValue.addressMethod === "diffAddress"}
                          onClick={() => setShowForm(true)}
                        />
                        <label
                          class="form-check-label mt-0 fs-6"
                          for="flexRadio2"
                        >
                          Use different Billing Address
                        </label>
                      </div>
                      <p className="text-danger">{formErrors.addressMethod}</p>
                      {showForm && (
                        <form className="my-4">
                          <div className="form-group col-md-12">
                            <label id="address">Address *</label>
                            <input
                              type="text"
                              id="address"
                              name="address"
                              value={formValue.address}
                              onChange={handleChange}
                              placeholder="Address"
                            />
                            <p className="text-danger">{formErrors.address}</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="form-group">
                              <label htmlFor="city">City Name*</label>
                              <input
                                type="text"
                                id="city"
                                name="city"
                                value={formValue.city}
                                onChange={handleChange}
                                placeholder="City Name"
                              />
                              <p className="text-danger">{formErrors.city}</p>
                            </div>
                            <div className="form-group">
                              <label htmlFor="postalCode">Postal Code *</label>
                              <input
                                type="text"
                                id="postalCode"
                                name="postalCode"
                                value={formValue.postalCode}
                                onChange={handleChange}
                                placeholder="Postal Code"
                              />
                              <p className="text-danger">
                                {formErrors.postalCode}
                              </p>
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="postalCode">Phone Number *</label>
                            <input
                              type="text"
                              id="phone"
                              name="phone"
                              value={formValue.phone}
                              onChange={handleChange}
                              placeholder="Phone Number"
                            />
                            <p className="text-danger">{formErrors.phone}</p>
                          </div>
                        </form>
                      )}
                    </div>
                  )}
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input mb-0"
                    type="radio"
                    name="paymentMethod"
                    id="flexRadioDefault2"
                    value="cardPayment"
                    onChange={handleChange}
                    checked={formValue.paymentMethod === "cardPayment"}
                    onClick={() => setShowAddress(false)}
                  />
                  <label
                    class="form-check-label mt-0 fs-6"
                    for="flexRadioDefault2"
                  >
                    Card Payment
                  </label>
                </div>
                <p className="text-danger">{formErrors.paymentMethod}</p>
                <div className="d-flex justify-content-end">
                  {formValue.paymentMethod === "cardPayment" ? (
                    <StripeCheckout
                      name="NH FASHION"
                      description="Enter your card details here"
                      amount={cart.total * 100}
                      token={onToken}
                      stripeKey={KEY}
                    >
                      <button className="border-0 bg-black text-white px-4 py-2 mt-3 mb-2 me-2">
                        CONFIRM ORDER
                      </button>
                    </StripeCheckout>
                  ) : (
                    <button className="border-0 bg-black text-white px-4 py-2 mt-3 mb-2 me-2">
                      CONFIRM ORDER
                    </button>
                  )}
                </div>
              </form>
            </div>
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
              <div className="d-flex justify-content-center mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
