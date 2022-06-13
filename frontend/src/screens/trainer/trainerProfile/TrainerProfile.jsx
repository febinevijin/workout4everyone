import React from "react";
import "./TrainerProfile.css";
import TraainerHeader from "../../../components/trainer/header/TrainerHeader";
import TrainerNavbar from "../../../components/trainer/navbar/TrainerNavbar";
import { Col, Container, Row } from "react-bootstrap";

const TrainerProfile = () => {
  return (
    <div>
      <TraainerHeader />
      <TrainerNavbar />

      <div className="text-end" >
        <button class="button-7" role="button">Button 7</button>
        </div>

      <div className="container-fluid allContains my-5">
       
        <Row className="my-5">
          <Col className="trainerProCol">
            <div className="trainerProf mt-3">
              <img
                className="trainerProfImg"
                src="https://www.witseducation.com/fit/wp-content/uploads/2014/12/lifestyle-wellness-coaching-trainer.jpg"
                alt=""
              />
            </div>
          </Col>

          <Col className="trainerDetailCol">
            <h1>Name</h1>
            <h2>trainer</h2>
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h5>
            <Row className="mt-5">
              <Col className="detailOne">
                <div className="d-flex commonDetail">
                  <div>
                    <h5>email</h5>
                  </div>
                  <div>
                    <h5 className="spa">/ abcd@gmail.com</h5>
                  </div>
                </div>

                <div className="d-flex commonDetail">
                  <div>
                    <h5>email</h5>
                  </div>
                  <div>
                    <h5 className="spa">/ abcd@gmail.com</h5>
                  </div>
                </div>

                <div className="d-flex commonDetail">
                  <div>
                    <h5>email</h5>
                  </div>
                  <div>
                    <h5 className="spa">/ abcd@gmail.com</h5>
                  </div>
                </div>
              </Col>
              <Col className="detailTwo">
                <div className="d-flex commonDetail">
                  <div>
                    <h5>email</h5>
                  </div>
                  <div>
                    <h5 className="spa">/ abcd@gmail.com</h5>
                  </div>
                </div>

                <div className="d-flex commonDetail">
                  <div>
                    <h5>email</h5>
                  </div>
                  <div>
                    <h5 className="spa">/ abcd@gmail.com</h5>
                  </div>
                </div>

                <div className="d-flex commonDetail">
                  <div>
                    <h5>email</h5>
                  </div>
                  <div>
                    <h5 className="spa">/ abcd@gmail.com</h5>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="extraDetail d-flex ">
            <div className="extraBox my-3">
              <div className="d-flex whyThis">
                <div className="text-center my-4">
                  <h4>Happy Clients</h4>
                  <h5>7</h5>
                </div>

                <div className="text-center my-4">
                  <h4>Videos</h4>
                  <h5>7</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TrainerProfile;
