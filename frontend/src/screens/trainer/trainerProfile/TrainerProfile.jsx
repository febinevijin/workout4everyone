import React, { useEffect, useState } from "react";
import "./TrainerProfile.css";
import TraainerHeader from "../../../components/trainer/header/TrainerHeader";
import TrainerNavbar from "../../../components/trainer/navbar/TrainerNavbar";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";



const TrainerProfile = () => {

  const [trainerData, setTrainerdata] = useState('')

  let trainerProfile = async () => {

    const config = {
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          "Content-type": "application/json",
        },
      };

    const {data} = await axios.get("https://backend.workout4everyone.ml/api/trainer/trainerProfile",config)
    setTrainerdata(data)
    console.log(data);
   
}

  useEffect(() => {
    trainerProfile()
}, [])
  return (
    <div>
      <TraainerHeader />
      <TrainerNavbar />
      <div className="container-fluid  ">
        <form className="form-horizontal" role="form">
          <Row>
            <Col>
              <div className="text-center" style={{ marginLeft: "20%" }}>
                <img
                  style={{
                    borderRadius: "55%",
                    width: "200px",
                    marginTop: "10%",
                  }}
                  src={trainerData.trainerProfile}
                  className="avatar img-circle img-thumbnail"
                  alt="avatar"
                />
                <h6>Upload a different photo...</h6>

                <input
                  type="file"
                  style={{ width: "40%", marginLeft: "30%" }}
                  className="form-control"
                />
              </div>
            </Col>
            <Col>
              <div className="col-md-9 personal-info mt-5 me-5">
                <h3>Personal info</h3>

                <div className="form-group">
                  <label className="col-lg-3 control-label">First name:</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="text"
                      value={trainerData.name}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Email:</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="text"
                      value={trainerData.email}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-lg-3 control-label">Mobile</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="text"
                      value={trainerData.mob ? trainerData.mob :  "add mob"}
                    />
                  </div>
                </div>
              </div>
              <button
                className="bg-success mt-3 but"
                style={{ borderRadius: "5px", color: "white", font: "200" }}
              >
                submit
              </button>
            </Col>
          </Row>
        </form>
      </div>
     

      <div className="container-fluid allContains my-5">
      <div className="text-end my-4" >
        <button class="button-7" role="button">
          <Link to="/trainerProfileEdit" >Edit</Link>
          </button>
        </div>
        <Row className="my-5">
          <Col className="trainerProCol">
            <div className="trainerProf mt-3">
              <img
                className="trainerProfImg"
                src={trainerData.trainerProfile}
                alt=""
              />
            </div>
          </Col>

          <Col className="trainerDetailCol">
            <h1>{trainerData.name}</h1>
            <h2>trainer</h2>
            {/* <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h5> */}
            <Row className="mt-5">
              <Col className="detailOne">
                <div className="d-flex commonDetail">
                  <div>
                    <h5>email</h5>
                  </div>
                  <div>
                    <h5 className="spa">/ {trainerData.email}</h5>
                  </div>
                </div>

                <div className="d-flex commonDetail">
                  <div>
                    <h5>Mob</h5>
                  </div>
                  <div>
                    <h5 className="spa">{trainerData.mob ? trainerData.mob : <p>/ add mob</p>}</h5>
                  </div>
                </div>

                <div className="d-flex commonDetail">
                  <div>
                    <h5>Id</h5>
                  </div>
                  <div>
                    <h5 className="spa">/ {trainerData._id}</h5>
                  </div>
                </div>
              </Col>
             
            </Row>
          </Col>
        </Row>
       
      </div>
    </div>
  );
};

export default TrainerProfile;
