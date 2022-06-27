import { create } from "@mui/material/styles/createTransitions";
import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {

    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
      }; 

      const { data } = await axios.post(
        "https://workout4everyone.ml/api/users/loginUser",
        { email, password },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
      
      setError(err.response.data?.message);
      // console.log(err.response.data.message);
      toast.error(err.response.data?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };







  const ContextData = {
    submitHandler,
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
  };
  return (
    <AuthContext.Provider value={ContextData}>{children}</AuthContext.Provider>
  );
};
