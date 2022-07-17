import React, { useState } from "react";
import Button from "../../Components/Button";
import useWindowDimensions from "../../Hooks/Windowsdimension";
  
import './authentication.scss'
const Authentication = () => {
  const [loginFormValues, setLoginFormValues] = useState({
    username: "",
    password: "",
  });
  const [registerFormValues, setRegisterFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //window dimension
const { width, height } = useWindowDimensions();


  return (
    <div className="container-fluid">
      <div className=" heading">
        <h1>My Account</h1>
      </div>
      <br /><br />
      <div className="container">
      <div className="container row">
        {/* Login Form */}

        <div className="col-md-6 register d-flex  flex-column">
          <h2>LOGIN</h2>
          <form>
            <div className="form-group">
            <label htmlFor="username">Username *</label>
            <input
              type="text"
              id="username"
              name="username"
              value={loginFormValues.username}
              onChange={(e) =>
                setLoginFormValues((e.target.name = e.target.value))
              }
              placeholder="Username"
              required
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginFormValues.password}
              onChange={(e) =>
                setLoginFormValues((e.target.name = e.target.value))
              }
              placeholder="Password"
              required
            />
            </div>
            <Button title="LOG IN" />
          </form>
        </div>

        

        {/* Register form */}

        <div className="col-md-6 d-flex flex-column">
          <div className="register">
          <h2>REGISTER</h2>
          <form>
            <div className="form-group">
            <label htmlFor="username">Username *</label>
            <input
              type="text"
              id="username"
              name="username"
              value={registerFormValues.username}
              onChange={(e) =>
                setRegisterFormValues((e.target.name = e.target.value))
              }
              placeholder="Username"
              required
            />
            </div>
            <div className="form-group">
            <label id="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={registerFormValues.email}
              onChange={(e) =>
                setRegisterFormValues((e.target.name = e.target.value))
              }
              placeholder="Email Address"
              required
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              value={registerFormValues.password}
              onChange={(e) =>
                setRegisterFormValues((e.target.name = e.target.value))
              }
              placeholder="Password"
              required
            />
            </div>
            <div className="form-group">
            <label htmlFor="confirmPassword">Confrom Password *</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={registerFormValues.confirmPassword}
              onChange={(e) =>
                setRegisterFormValues((e.target.name = e.target.value))
              }
              placeholder="Password"
              required
            />
            </div>
            <Button title="REGISTER" />
          </form>
        </div>
        </div>
      </div>
      <br />
      <br /></div>
    </div>
  );
};

export default Authentication;
