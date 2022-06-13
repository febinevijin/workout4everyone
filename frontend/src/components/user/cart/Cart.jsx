import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Cart.css'
const Cart = () => {
  return (
    <div className='container-fluid'>
        <Row className='workContainer my-3'>
            <Col className='workCol' >
            <div className='preview-container'>
                <img className='workImg' src="https://i.ytimg.com/vi/6VFLKdfxA24/maxresdefault.jpg" alt="" />
            </div>

            <div className="programDetails">
                    <p>workout namr</p>
                    <p>6 week challenge</p>
                    <p>bt trainer</p>
            </div>

            <div className="viewButton">
            <button class="button28" role="button"><Link  to= "/videoPlayer">Start Program</Link></button>
            </div>

            </Col>
        </Row>

        <Row className='workContainer my-3'>
            <Col className='workCol' >
            <div className='preview-container'>
                <img className='workImg' src="https://i.ytimg.com/vi/6VFLKdfxA24/maxresdefault.jpg" alt="" />
            </div>

            <div className="programDetails">
                    <p>workout namr</p>
                    <p>6 week challenge</p>
                    <p>bt trainer</p>
            </div>

            <div className="viewButton">
            <button class="button28" role="button">Start Program</button>
            </div>

            </Col>
        </Row>

        

        
    </div>
  )
}

export default Cart