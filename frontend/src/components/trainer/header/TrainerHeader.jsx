import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './TrainerHeader.css'

const TraainerHeader = () => {


  useEffect(() => {
  let trainer = localStorage.getItem('trainerInfo')

  if(!trainer){
    navigate('/choosepage')
  }


  }
 
  , [])
  
  let navigate = useNavigate();

  return (
    <div className='trainerHeader'>
    
        <h3 className='trainerText px-5'>Trainer</h3>
      <div className='logbtn mx-5'>
      <button class="button-4" role="button" onClick = {()=>{
              localStorage.removeItem("trainerInfo");
              navigate('/choosepage')
            }}>log out</button>
      </div>
    </div>
  )
}

export default TraainerHeader