import React, { useEffect, useState } from 'react'

import './ProductItems.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ProductItems = () => {

  const [workout, setWorkout] = useState('')

  let getAllWorkout = async ()=>{
    const {data} =  await axios.get("http://localhost:5000/api/users/getAllWorkout")
    setWorkout(data)
  }




useEffect(() => {

  try {

    getAllWorkout()

  } catch (error) {
    
  }
 
}, [])




  return (
    <>
<Container className='cont'>
      <Row >
{workout && workout.map((data) =>(


        <Col lg={4} className="me-auto">
          
        <Card>
  <Card.Img variant="top" src={data?.previewUrl} className='img_pro'/>
  <Card.Body>

    <Card.Title>{data.workout}</Card.Title>
    <Card.Text>
     { data.week}
    </Card.Text>
    <Card.Text>
     { data.price}
    </Card.Text>
    <Button variant="primary">
      <Link to={`/Oneproduct/${data._id}`}>
      Get Start
      </Link>
    </Button>
  </Card.Body>
</Card>
    </Col>
))}
    </Row>
  
    </Container> 
  
    
   
        </>
  )
}

export default ProductItems