import React from "react";
import "./Sidebar.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Container className="sidebar-cont">
      <div className="profileImg">
        <img className="mm" src="\images\cardimg.jpg" alt="" /><hr />
      </div>

      <div className="sidebar-content ">
        <ul className="m-0 p-0">
          <li className="my-2 mx-auto"><span ><Link to = "/userProfile">Profile</Link></span> </li>
           
          <li className="my-2 mx-auto"><span ><Link to = "/myWorkout">workout</Link></span> </li>
         
          
        </ul>
      </div>

    </Container>
  );
};

export default Sidebar;
