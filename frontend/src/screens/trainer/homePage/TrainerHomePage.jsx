import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TraainerHeader from '../../../components/trainer/header/TrainerHeader'
import TrainerNavbar from '../../../components/trainer/navbar/TrainerNavbar'
import './TrainerHomePage.scss'

const TrainerHomePage = () => {

  const [trainerDeatails, setTrainerDeatails] = useState('')

  
  let details = async () => {

    const config = {
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          "Content-type": "application/json",
        },
      };

    const {data} = await axios.get("http://localhost:5000/api/trainer/trainerDashboard",config)
    setTrainerDeatails(data)
    console.log(data);
}


  useEffect(() => {
    details()
}, [])
  return (
    <div>
        <TraainerHeader/>
        <TrainerNavbar/>

        <div className="mainContainer container-fluid">
  <h2>Uploaded video <small>.</small></h2>
  <ul className="responsive-table">
    <li className="table-header">
      <div className="col col-1">No:</div>
      <div className="col col-2">program Name</div>
      <div className="col col-3">Amount </div>
      <div className="col col-4">uploaded date</div>
    </li>
    {trainerDeatails && trainerDeatails.map((data,index) => (

    <li className="table-row">
      <div className="col col-1" data-label="Job Id">{index+1}</div>
      <div className="col col-2" data-label="Customer Name">{data.workoutName}</div>
      <div className="col col-3" data-label="Amount">{data.trainerPrice}</div>
      <div className="col col-4" data-label="Payment Status">{data.createdAt.split("T")[0].split('-').reverse().join('/')}</div>
    </li>
    ))}
  
  </ul>
</div>

    </div>
  )
}

export default TrainerHomePage