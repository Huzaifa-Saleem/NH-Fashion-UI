import React, { useState, useEffect } from "react";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import {userRequest, TOKEN} from "../../redux/requestMethods";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Payment = () => {
  const cart = useSelector((state) => state.cart);

  const [cashOnDelivery, setCashOnDelivery] = useState("");
  const [cardPayment, setCardPayment] = useState("");
  const [sameAddress, setSameAddress] = useState("");
  const [diffAddress, setDiffAddress] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");

  const [showAddress, setShowAddress] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const KEY = "pk_test_51LVDHLAqGbI5WtKTFLofZqCHZcu7quyAXHXuk0N1UHClvxO2Vi9pan8oGrGfUpcNuJfFSTOcPrGcoOrM1BDQYnUd00K6Jm5v6c"

  const [stripeToken, setStripeToken] =useState(null)

  const navigate = useNavigate();

  const onToken = (token) => {
     setStripeToken(token);
  }

  useEffect(() => {
    const makeRequest = async () => {
      try{
  // const res = await userRequest.post ("/checkout/payment", {
  const res = await axios.post ("http://localhost:4000/api/checkout/payment",{
  header: {token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTY1ZmYzMWQ3YWUyYTJkMzQ4YzkwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDE0MDk1OCwiZXhwIjoxNjYwNDAwMTU4fQ.78Re6BbgX1UIC3RkPIWHhx94s2-U0euiTwWkNYXFo34"},  
  tokenId: stripeToken.id,
  amount: cart.total*100
});
navigate.push("/success", {data:res.data});
      }
      catch{

      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total,navigate])

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
              <div class="form-check mb-2">
                <input
                  class="form-check-input mb-0"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value={cashOnDelivery}
                  onChange={(e) => setCashOnDelivery(e.target.value)}
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
                        name="flexRadioDefault"
                        id="flexRadio1"
                        value={sameAddress}
                        onChange={(e) => setSameAddress(e.target.value)}
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
                        name="flexRadioDefault"
                        id="flexRadio2"
                        value={diffAddress}
                        onChange={(e) => setDiffAddress(e.target.value)}
                        onClick={() => setShowForm(true)}
                      />
                      <label
                        class="form-check-label mt-0 fs-6"
                        for="flexRadio2"
                      >
                        Use different Billing Address
                      </label>
                    </div>
                    {showForm && (
                      <form className="my-4">
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
                              type="text"
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
                      </form>
                    )}
                  </div>
                )}
              </div>
              <div class="form-check">
                <input
                  class="form-check-input mb-0"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value={cardPayment}
                  onChange={(e) => setCardPayment(e.target.value)}
                  onClick={() => setShowAddress(false)}
                />
                <label
                  class="form-check-label mt-0 fs-6"
                  for="flexRadioDefault2"
                >
                  Card Payment
                </label>
              </div>
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
              <div className="d-flex justify-content-center mt-4">
                {
                  showAddress ?  <Button title="CONFIRM ORDER" src="/confirmOrder" /> :

                  <StripeCheckout
                  name="Three Comma Co."
                  description="Big Data Stuff" 
                  // image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" 
                  // ComponentClass="div"
                  // panelLabel="Give Money" 
                  amount={cart.total*100} 
                  // currency="USD"
                  // stripeKey="..."
                  // locale="zh"
                  // email="info@vidhub.co"
                  shippingAddress
                  billingAddress
                  // zipCode={false}
                  // alipay 
                  // bitcoin 
                  // allowRememberMe 
                  token={onToken} 
                  stripeKey={KEY}
                  // opened={this.onOpened} 
                  // closed={this.onClosed} 
                  // reconfigureOnUpdate={false}
                  // triggerEvent="onTouchTap"
                >
                <Button title="CONFIRM ORDER" src="" />
                  
                </StripeCheckout>

                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
