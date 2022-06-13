import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Cart from '../../../components/user/cart/Cart';
import Header from '../../../components/user/Header';
import Sidebar from '../../../components/user/profile/Sidebar';

const MyWorkout = () => {
    return (
        <div className="master_profile">
          <Header />
    
          <Row>
            <div className="main_profile d-flex py-5">
              <Col className="profile-sidebar col-lg-3 mx-2">
                
                  <Sidebar />
               
              </Col>
    
              <Col  className="profile-rightsidebar mx-3">
                  <h1>My workout</h1>
                  
               <Cart/>


              </Col>
            </div>
          </Row>
        </div>
      );
}

export default MyWorkout