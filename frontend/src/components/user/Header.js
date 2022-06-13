import React, { useEffect, useState } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Header() {

  const [name, setName] = useState("")

  useEffect(() => {
 let user = localStorage.getItem("userInfo");
if(user)
{
  user = JSON.parse(user) 
  console.log(user.name);
  setName(user.name)
}
  
   
  }, [])
  



  let navigate = useNavigate();
  

  return (
 <>
  <Navbar bg="dark" expand="lg" variant="dark" style={{height:'100px'}} >
    <Container fluid>
      <Navbar.Brand>
        <Link to="/" > Workout 4 Everyone</Link>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="ms-auto my-2 my-lg-0"
          style={{ Height: '150px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">
          <Link to="/" >Home</Link>
          </Nav.Link>

          <Nav.Link> 
          <Link to='/product' >  Products</Link>
          </Nav.Link>

          {name ? 
          <NavDropdown  title={name} id="navbarScrollingDropdown">
              
            <NavDropdown.Item href="#action3"><i class="bi bi-person-circle"></i>
            <Link to = '/userProfile' >My Profile</Link>
            
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick = {()=>{
              localStorage.removeItem("userInfo");
              navigate('/')
            }}>Logout</NavDropdown.Item>
            <NavDropdown.Divider />
         
          </NavDropdown>:  <Nav.Link> 
          <Link to='/choosepage' > sign in</Link>
          </Nav.Link>}
          
         
         
      
        </Nav>
        {/* <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="secondary">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Container>
  </Navbar>
 </>
  )
}

export default Header