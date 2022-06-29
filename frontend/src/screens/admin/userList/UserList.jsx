import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import AdminHeader from '../../../components/admin/Header/AdminHeader'
import AdminSidebar from '../../../components/admin/sidebar/AdminSidebar'
import './UserList.css'

const UserList = () => {
const [refresh, setRefresh] = useState(false)
  const [users,setUsers] = useState()





  const getUsers = async ()=>{
    const {data} = await axios.get("https://backend.workout4everyone.ml/api/admin/allUser")
    // console.log(data);
    setUsers(data)
  }


  const blockUnblock = async (id) =>{
    
    try {
      await axios.put(`https://backend.workout4everyone.ml/api/admin/blockUser/${id}`)
      setRefresh(!refresh)
    } catch (error) {
      console.log(error);
    }
 

  }

  useEffect(() => {
  
    try {
      getUsers()
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
              <h3>Users List</h3>
            </div>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>No:</th>
      <th> Name</th>
      <th>Email</th>
      <th>UserId</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
{users && users.map((user,index)=>(
 <tr key={user._id}>
 <td>{index+1}</td>
 <td>{user.name}</td>
 <td>{user.email}</td>
 <td>{user._id}</td>
 <td>{ user.block === true ? <Button className="btn-danger" onClick={()=> blockUnblock(user._id)}>Blocked</Button> : <Button className='bg-success' onClick={()=> blockUnblock(user._id)}>Unblocked</Button>} </td>
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

export default UserList