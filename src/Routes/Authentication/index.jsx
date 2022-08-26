import React, { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import "./authentication.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import {toast} from 'react-toastify'
const Authentication = (props, setUserName) => {
  const navigate = useNavigate();
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [iserror, setIsError] = useState(false);
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user.currentUser);

  //register
  const handleRegister = async(e) =>{
    e.preventDefault();
    const res = await axios.post('http://localhost:4000/api/auth/register', {username,email,password}).then((res)=>{
      toast.success('registered Succesfully')
    }).catch((err)=>{
      console.log(err.message.index);
      if(err.message === 'Request failed with status code 500'){
        toast.error('user already exist')
      }
    })
    setUsername('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }



  //login
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username: loginUsername, password: loginPassword });
  if(error){
    toast.error('Something Went Wrong')
  }
};

  if (user) {
    navigate("/");
  }

  return (
    <div className="container-fluid">
      <div className=" heading">
        <h1>My Account</h1>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="container row">

          {/* Login Form */}

          <div className="col-md-6 register d-flex  flex-column">
            <h2>LOGIN</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username">Username *</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
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
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
              {error ? (
                <p style={{ color: "red" }}>Something went Wrong</p>
              ) : null}
              <button className='lgbtn' onClick={props.onHide} style={isFetching ? { cursor: "not-allowed" } : null}>
                LOG IN
              </button>
            </form>
          </div>



          {/* Register form */}

          <div className="col-md-6 d-flex flex-column">
            <div className="register">
              <h2>REGISTER</h2>
              <form onSubmit={handleRegister}>
                <div className="form-group">
                  <label htmlFor="username">Username *</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) =>
                      setUsername(e.target.value)
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
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
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    placeholder="Password"
                    required
                  />
                </div>
                {/* {Error ? (<div>{Error}</div>) : null} */}
                <button className='lgbtn' >register</button>
              </form>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Authentication;
