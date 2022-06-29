import React, { useEffect, useState } from 'react'
import './AdminHome.css'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'

import AdminHeader from '../../../components/admin/Header/AdminHeader'
import AdminSidebar from '../../../components/admin/sidebar/AdminSidebar'
import axios from 'axios'


 

 



const AdminHomeScreen = () => {

  const [user, setUser] = useState('')
  const [trainer, setTrainer] = useState('')
  const [video, setVideo] = useState('')


  let getUserCount = async () =>{
    const {data} =  await axios.get("https://backend.workout4everyone.ml/api/admin/userCount")
    setUser(data)

  }

  
  let getTrainerCount = async () =>{
    const {data} =  await axios.get("https://backend.workout4everyone.ml/api/admin/trainerCount")
    setTrainer(data)

  }

  let getVideoCount = async () =>{
    const {data} =  await axios.get("https://backend.workout4everyone.ml/api/admin/videoCount")
    setVideo(data)

  }


 
useEffect(() => {
try {
  getUserCount()
  getTrainerCount()
  getVideoCount()
} catch (error) {
  console.log(error);
}


}, [])





  return (
  <>
  <AdminHeader/>
  <Row>
    <Col lg={2}>
    <AdminSidebar/>
    </Col>

    <Col lg={10}>
      <div className='container fluid'>
        <div>

      <Card className='dashboardCard' style={{ width: '10rem' ,height:'12rem' }}>
  <Card.Body>
    <div>
     <h2>Users</h2>
    </div>

    <div>
      <h1>{user}</h1>
    </div>
    
  </Card.Body>
</Card>
        </div>

        <div>

<Card className='dashboardCard' style={{ width: '10rem' ,height:'12rem' }}>
<Card.Body>
<div>
     <h3>Trainers</h3>
    </div>
    <div>
    <h1>{trainer}</h1>
    </div>
</Card.Body>
</Card>
  </div>

  <div>

<Card className='dashboardCard' style={{ width: '10rem' ,height:'12rem' }}>
<Card.Body>
<div>
     <h3>Videos</h3>
    </div>
    <div>
      <h1>{video}</h1>
    </div>
</Card.Body>
</Card>
  </div>
</div>
    </Col>
  </Row>
  
  </>
   
  )
}

export default AdminHomeScreen
