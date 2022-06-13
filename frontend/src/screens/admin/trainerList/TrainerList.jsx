import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import AdminHeader from '../../../components/admin/Header/AdminHeader'
import AdminSidebar from '../../../components/admin/sidebar/AdminSidebar'
import './TrainerList.css'

const TrainerList = () => {


    const [refresh, setRefresh] = useState(false)
  const [trainers,setTrainers] = useState()





  const getTrainers = async ()=>{
    const {data} = await axios.get("http://localhost:5000/api/admin/allTrainer")
    // console.log(data);
    setTrainers(data)
  }


  const blockUnblock = async (id) =>{
    
    try {
      await axios.put(`http://localhost:5000/api/admin/blockTrainer/${id}`)
      setRefresh(!refresh)
    } catch (error) {
      console.log(error);
    }
 

  }

  useEffect(() => {
  
    try {
      getTrainers()
    } catch (error) {
      console.log(error);
    }
  
   
  }, [refresh])





  return (
    <>
       <AdminHeader/>
    <Row>
      <Col lg={2}>
      <AdminSidebar/>
      </Col>
  
      <Col lg={10}>
          <div className='container-fluid mt-5'>
          <div>
              <h3>Trainers List</h3>
            </div>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>No:</th>
      <th>First Name</th>
      <th>Email</th>
      <th>TrainerId</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
{trainers && trainers.map((trainer,index)=>(
 <tr key={trainer._id}>
 <td>{index+1}</td>
 <td>{trainer.name}</td>
 <td>{trainer.email}</td>
 <td>{trainer._id}</td>
 <td>{ trainer.block === true ? <Button className="btn-danger mx-1" onClick={()=> blockUnblock(trainer._id)}>Blocked</Button> : <Button className='bg-success mx-1' onClick={()=> blockUnblock(trainer._id)}>Unblocked</Button>} 
 <Button className='mx-1'>view</Button>
 </td>
</tr>
)) }
   
   
   
  </tbody>
</Table>
</div>
      </Col>
    </Row>
    </>
  )
}

export default TrainerList
