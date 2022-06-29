import React, { useEffect, useState } from 'react'
import './TrainerLogin.css'

import axios from "axios"
import { useNavigate } from 'react-router-dom'

const TrainerLoginScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const [autherror, setAuthError] = useState(false)
  let navigate = useNavigate();


useEffect( ()=>{
  const trainerInfo = localStorage.getItem("trainerInfo")
  console.log(trainerInfo);
  if(trainerInfo){
    navigate('/trainerHomepage')
  }
}, [navigate] )



  const submitHandler =async (e)=>{
    e.preventDefault()

    if(email=="" && password=="")
{
  setAuthError('please fill the form')
}

    try {
      const config = {
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json'
        }
      }

      const{data}= await axios.post('https://backend.workout4everyone.ml/api/trainer/loginTrainer',{email,password},
     config )
      console.log(data);
     localStorage.setItem('trainerInfo',JSON.stringify(data))

    } catch (err) {

       setError("Invalid email or password")
      
    }
  
  }







  return (
    <>
         <div className="auth-wrapper">
  <div className="auth-inner">
  {error && <div class="alert alert-danger" role="alert">
  {error}
</div> }

{autherror && <div class="alert alert-danger" role="alert">
  {autherror}
</div> }
  <form onSubmit={submitHandler}>
        <h3>Trainer Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            value={email}
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value) }
            
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
            
          />
        </div>
       
        <div className="d-grid mt-4">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
  </div>

  </div>
    </>
  )
} 

export default TrainerLoginScreen