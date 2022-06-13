import React from 'react'
import { Link } from 'react-router-dom'
import TraainerHeader from '../../../components/trainer/header/TrainerHeader'
import TrainerNavbar from '../../../components/trainer/navbar/TrainerNavbar'
import './Video.css'
import {  Button, Col, Container, Row, Table } from "react-bootstrap";

const Video = () => {
  return (
    <div>
         <TraainerHeader/>
        <TrainerNavbar/>
        <div className='container-fluid'>
         
           <Row className='my-5'>
            <Col>
            <div className="addvideo">
                <button className='stylebtn'>
                  <Link to='/trainerAddVideo'>add Video</Link>
                </button>
            </div>
            </Col>
           </Row>

          <Row className='my-5'>
            <Col >
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Workout</th>
      <th>Id</th>
      <th>No: of Users</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><Button className='mx-1'>edit</Button><Button  className='mx-1 '>delete</Button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
   
  </tbody>
</Table>
</Col>
          </Row>

         
        </div>
    </div>
  )
}

export default Video