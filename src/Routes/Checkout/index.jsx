import React, { useState, useEffect } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);

  const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    email: "",
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

    isSubmit && navigate("/payment");

  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    const regex = new RegExp(/^[0-9\b]+$/);

    if (!values.firstName) {
      errors.firstName = "Enter First Name!";
    }
    if (!values.lastName) {
      errors.lastName = "Enter Last Name!";
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
    } 
    else if (!regex.test(values.phone)) {
      errors.phone = "You Can Enter Only Number!";
    } 
    else if (values.phone.length != 11) {
      errors.phone = "Enter a valid Phone Number!";
    }
    if (!values.email) {
      errors.email = "Enter Your email!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Enter a valid Email";
    }
    return errors;
  };

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
              <form onSubmit={onSubmit}>
                <div className="d-flex justify-content-between">
                  <div className="form-group">
                    <label htmlFor="username">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formValue.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                    />
                    <p className="text-danger">{formErrors.firstName}</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formValue.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                    />
                    <p className="text-danger">{formErrors.lastName}</p>
                  </div>
                </div>
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
                </div>
                <p className="text-danger">{formErrors.address}</p>
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
                    <p className="text-danger">{formErrors.postalCode}</p>
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
                </div>
                <p className="text-danger">{formErrors.phone}</p>
                <div className="form-group col-md-12">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formValue.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
                <p className="text-danger">{formErrors.email}</p>
                <div className="d-flex justify-content-end">
                  <button className="border-0 bg-black text-white px-4 py-2 mt-3">
                    CONTINUE PAYMENT
                  </button>
                </div>
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
                  <p className="fs-6 text-black mb-2">
                    Shipping calculated at next step.
                  </p>
                </div>
                <hr />
                <div className="d-flex justify-content-between mt-4">
                  <p className="fs-6 text-black mb-0">Total</p>
                  <h5 className="fs-5 fw-bold mb-0">$ {cart.total}</h5>
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
