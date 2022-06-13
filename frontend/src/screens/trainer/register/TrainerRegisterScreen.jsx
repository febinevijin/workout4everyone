import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './TrainerReg.css'



const TrainerRegisterScreen = () => {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')

  const [fileInputState,setFileInputState] = useState("")
  const [previewSource,  setPreviewSource] = useState('')

  const [profilefileInputState,setProfileFileInputState] = useState("")
  const [profilepreviewSource,  setProfilePreviewSource] = useState('')

  const [selectedFile, setSelectedFile] = useState('')

  const [error, setError] = useState(false)
  const [message, setMessage] = useState(null)
  let navigate = useNavigate()


  const handleProfileFileInputChange = (e) =>{
    const file = e.target.files[0]
    // console.log(file.name);
    // let imageName =file.name
    setProfileFileInputState(e.target.value);
    profilepreviewFile(file)
  }



  const handleFileInputChange = (e) =>{
    const file = e.target.files[0]
    // console.log(file.name);
    // let imageName =file.name
    setFileInputState(e.target.value);
    previewFile(file)
  }

  const profilepreviewFile = (file)=>{
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = () =>{
      setProfilePreviewSource(reader.result)
    }
  }

  const previewFile = (file)=>{
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = () =>{
      setPreviewSource(reader.result)
    }
  }








  const submithandler =async (e) =>{
    e.preventDefault()

    if(password !== confirmpassword){
      setMessage("password doesnt match")
    }else{
      setMessage(null)
    }

    if(!profilepreviewSource) return;
   
    // uploadImage(previewSource)

  const  profileImage=profilepreviewSource;
  // console.log(image);

    if(!previewSource) return;
   
    // uploadImage(previewSource)

  const  image=previewSource;
  // console.log(image);



  try {
      const config = {
        headers:{
          "Content-type":"application/json"
        }
      }

      const {data }= await axios.post('http://localhost:5000/api/trainer/registerTrainer',{name,email,password,profileImage,image},config)
      console.log(data);
     localStorage.setItem('trainerInfo',JSON.stringify(data))
   
     console.log(data);
     if (data.success) {
       navigate('/loginTrainer')
     }


    }catch (err) {
      setError(err.response.data.message)
      console.log(err);
    }
  
  }

// const uploadImage = (image) => {
//   console.log(image);
 
  

// }




  return (
    <>
   
   <div className="auth-wrapper">
  <div className="auth-inner">

  {/* {message && <div class="alert alert-danger" role="alert">
  {message}
</div> } */}

{/* {error && <div class="alert alert-danger" role="alert">
  {error}
</div> } */}
  <form onSubmit={submithandler} >
        <h3>Trainer Sign Up</h3>
        <div className="mb-3">
          <label>Trainer name</label>
          <input
            type="text"
            value={name}
            className="form-control"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
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
		<div className="mb-3">
          <label>Confirm password</label>
          <input
            type="password"
            value={confirmpassword}
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Choose profile</label>
          <input
            type="file"
            name='profileImage'
            value={profilefileInputState}
            className="form-control"
            
            onChange={handleProfileFileInputChange}
          />
        </div>
        {profilepreviewSource && (
            <img src={profilepreviewSource} alt="choosen" 
            style={{height:'100px',
                     width:'100px'}}/>
          )}


        <div className="mb-3">
          <label>Choose image of your certificate</label>
          <input
            type="file"
            name='image'
            value={fileInputState}
            className="form-control"
            placeholder="Enter password"
            onChange={handleFileInputChange}
          />
        </div>

          {previewSource && (
            <img src={previewSource} alt="choosen" 
            style={{height:'100px',
                     width:'100px'}}/>
          )}




        <div className="d-grid">
          {/* <button type="submit" className="btn btn-primary">
            Sign Up
          </button> */}

          <button className="button-64"   type="submit"><span className="text"> Sign Up</span></button>
        </div>
        <p className="forgot-password text-right">
      
          Already registered   <Link to='/loginTrainer' >  sign up</Link>
        </p>
      </form>
  </div>

  </div>


   
    </>
  )
}

export default TrainerRegisterScreen