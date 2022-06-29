import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './RegisterScreen.css'
import axios from 'axios'


const RegisterScreen = () => {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(false)
  const [message, setMessage] = useState(null)
  let navigate = useNavigate()






  const submithandler =async (e) =>{
    e.preventDefault()

    if(password !== confirmpassword){
      setMessage("password doesnt match")
    }else{
      setMessage(null)
    }
    try {
      const config = {
        headers:{
          "Content-type":"application/json"
        }
      }

      const {data }= await axios.post('https://backend.workout4everyone.ml/api/users/registerUser',{name,email,password},config)
      console.log(data);
     localStorage.setItem('userInfo',JSON.stringify(data))
    //  const userInfo = localStorage.getItem("userInfo")
     console.log(data);
     if (data.success) {
       navigate('/')
     }


    }catch (err) {
      setError(err.response.data.message)
      console.log(err);
    }

    // console.log(email);
  }



  return (
    <>
  
 
  <div className="auth-wrapper">
  <div className="auth-inner">
  {message && <div class="alert alert-danger" role="alert">
  {message}
</div> }
{error && <div class="alert alert-danger" role="alert">
  {error}
</div> }
  <form onSubmit={submithandler}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>User name</label>
          <input
            type="text"
            value={name}
            className="form-control"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      
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
		<div className="mb-3">
          <label>Confirm password</label>
          <input
            type="password"
            value={confirmpassword}
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="d-grid justify-content-center">
          {/* <button type="submit" className="btn btn-primary">
            Sign Up
          </button> */}

          <button className="button-64"   type="submit"><span className="text"> Sign Up</span></button>
        </div>
        <p className="forgot-password text-right">
      
          Already registered   <Link to='/loginUser' >  sign in</Link>
        </p>
      </form>
  </div>

  </div>




    </>
  )
}

export default RegisterScreen