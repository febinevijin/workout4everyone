import React from "react";
import "./userProfile.css";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../../../components/user/Header";
import Sidebar from "../../../components/user/profile/Sidebar";
import RightSideProfile from "../../../components/user/profile/RightSideProfile";

const UserProfile = () => {
  return (
    <div className="master_profile">
      <Header />

      <Row>
        <div className="main_profile d-flex py-5">
          <Col className="profile-sidebar col-lg-3 mx-2">
            
              <Sidebar />
           
          </Col>

          <Col  className="profile-rightsidebar mx-3">
              <RightSideProfile />
           
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default UserProfile;
