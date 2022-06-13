import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import AdminHeader from "../../../components/admin/Header/AdminHeader";
import AdminSidebar from "../../../components/admin/sidebar/AdminSidebar";
import "./Application.css";

const Application = () => {
  const [application, setApplication] = useState();
  const [modalShow, setModalShow] = React.useState(false);
  const [refresh, setRefresh] = useState(false)

  let Applications = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/api/admin/getApplication"
    );
    console.log(data);
    setApplication(data);
  };

  useEffect(() => {
    Applications();
  }, [refresh]);


//   ============================MODAL============================

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
            <div className="container">
          <img src={modalShow} alt=""  style={{width:'30rem', height:'30rem'}} className="modalImg "/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


// ====================================================================

// =================================APPROVE===============================

const Approve =async (id)=>{
    console.log(id);
    try {
        console.log('qwerty');
        await axios.put(`http://localhost:5000/api/admin/approveTrainer/${id}`)
        setRefresh(!refresh)
    } catch (error) {
        console.log(error.message);  
    }
}



// ==========================================================================

// =================================DENY===============================

const Deny =async (id)=>{
    console.log(id);
    try {
        await axios.delete(`http://localhost:5000/api/admin/denyTrainer/${id}`)
        setRefresh(!refresh)
    } catch (error) {
        console.log(error);  
    }
}



// ==========================================================================

  return (
    <>
      <AdminHeader />
      <Row>
        <Col lg={2}>
          <AdminSidebar />
        </Col>

        <Col lg={10}>
          <div className="container-fluid">
            <h3>New Applications</h3>

            <div className="container-fluid  ">
              <Row>
                  {application && application.map((app)=>(
                            <Col lg={4}>
                            <div className="trainerCard py-5 my-2">
                              <div className="trainerImg ">
                                <img className="trainerProfile" src={app.trainerProfile} alt="" />
                              </div>
                              <div className="trainerDetails py-4">
                                <h6>{app.name}</h6>
                                <h6>{app.email}</h6>
                              </div>
                              <div className="trainerBtn py-2">
                                <button className="button-36"  onClick={() => setModalShow(app.trainerProof)} >View Certificate</button>
                              </div>
          
                              <div className="approveBtn trainerBtn py-2 d-flex">
                                <Button className="bg-danger mx-2" onClick={()=>Deny(app._id)} >Deny</Button>
                                <Button className="bg-success mx-2" onClick={()=>Approve(app._id)}>Approve</Button>

                                

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
                                
                              </div>
                            </div>
                          </Col>
                  ))}

                  { ! application && 
                  <div className="container">
                      <h1>no applications</h1>
                  </div>
                  }
                
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Application;
