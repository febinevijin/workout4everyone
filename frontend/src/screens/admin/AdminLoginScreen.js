import React, { useEffect, useState } from 'react'
import './AdminLoginScreen.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const AdminLoginScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const [autherror, setAuthError] = useState(false)
  let navigate = useNavigate();


useEffect( ()=>{
  const adminInfo = localStorage.getItem("adminInfo")
  console.log(adminInfo);
  if(adminInfo){
    navigate('/admin')
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

      const{data}= await axios.post('http://localhost:5000/api/admin/loginAdmin',{email,password},
     config )
      console.log(data);
     localStorage.setItem('adminInfo',JSON.stringify(data))

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
        <h3>Admin Sign In</h3>
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

export default AdminLoginScreen