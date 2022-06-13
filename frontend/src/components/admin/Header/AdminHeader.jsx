import React from 'react'
import './AdminHeader.css'
import { Button,  Form, FormControl,  } from 'react-bootstrap'

const AdminHeader = () => {
  return (
    <div className='adminHeader '>

<div className="top">
         <span className="logo">Admin</span>
       </div>
       
    <div>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="adminSearchbar me-2"
          aria-label="Search"
        />
        <Button variant="outline-dark">Search</Button>
      </Form>
      </div>

    </div>
  )
}

export default AdminHeader
