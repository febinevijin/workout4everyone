import React from 'react'
import Header from '../components/user/Header'
import './ChoosePage.css'
import { Link } from 'react-router-dom'



const Choosepage = () => {
  return (
    <div >
      <Header/>
<div className='back'>

<div className="container">
  <div className="card">
    <div className="box" >
    <div className='box1'>
      <div className="content">
       
        <h3>SIGN AS</h3>
        <p>TRAINER</p>
        <Link to='/registerTrainer' >  sign up</Link>
      </div>
    </div>
    </div>
  </div>

  

  <div className="card">
    <div className="box ">
      <div className='box2'>
      <div className="content">
      
        <h3>SIGN AS</h3>
        <p>CLIENT</p>
        <Link to='/registerUser' >  sign up</Link>
       
      </div>
    </div>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Choosepage