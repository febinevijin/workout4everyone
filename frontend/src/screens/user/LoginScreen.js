import React, { useContext, useEffect, useState } from "react";
import "./LoginScreen.css";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../context/AuthContext";

const LoginScreen = () => {
  const {
    submitHandler,
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
  } = useContext(AuthContext);

  let navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    console.log(userInfo);
    if (userInfo) {
      navigate("/");
    }
    //  else {
    //   navigate("/choosepage")
    // }
  }, [navigate]);

  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-inner">
          {error && (
            <div class="alert alert-danger" role="alert">
              <ToastContainer />
              {error}
            </div>
          )}
          <form onSubmit={submitHandler}>
            <h3>Log In</h3>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                value={email}
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                value={password}
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div> */}
            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            Already registered{" "}
            <Link to="/registerUser">
              {" "}
              <span className="signup">sign up</span>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
