import React from 'react'
import TraainerHeader from '../../../components/trainer/header/TrainerHeader'
import TrainerNavbar from '../../../components/trainer/navbar/TrainerNavbar'
import './TrainerHomePage.scss'

const TrainerHomePage = () => {
  return (
    <div>
        <TraainerHeader/>
        <TrainerNavbar/>

        <div className="mainContainer container-fluid">
  <h2>Uploaded video <small>.</small></h2>
  <ul className="responsive-table">
    <li className="table-header">
      <div className="col col-1">Job Id</div>
      <div className="col col-2">program Name</div>
      <div className="col col-3">Amount </div>
      <div className="col col-4">No: of users</div>
    </li>
    <li className="table-row">
      <div className="col col-1" data-label="Job Id">42235</div>
      <div className="col col-2" data-label="Customer Name">John Doe</div>
      <div className="col col-3" data-label="Amount">$350</div>
      <div className="col col-4" data-label="Payment Status">Pending</div>
    </li>
  
  </ul>
</div>

    </div>
  )
}

export default TrainerHomePage