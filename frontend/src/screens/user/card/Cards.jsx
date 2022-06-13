import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Cards.css";

const Cards = () => {
  return (
    <>
      <div
        className="card-container"
        style={{
          backgroundImage: "url(images/workbaner.jpg)",
        }}
      >
        <div className="card-innerContainer">
          <div className="newText ">
            <h2 className="headding">Not Sure Where To Start </h2>
          </div>

          <div className="main-cards ">
            <Container fluid>
              <Row>

             
                <Col lg={4} className="my-3">
                  <div
                    className="card1"
                    style={{
                      backgroundImage: "url(images/cardimg.jpg)",
                    }}
                  >
                    <div className="info d-block align-center ">
                      <h1 className="Card-title">Full Body Workout</h1>
                      <p className="description mx-3">6 week challenge</p>

                      <button className="button-35 mx-5" role="button">
                      get start
                      </button>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="my-3">
                  <div
                    className="card1"
                    style={{
                      backgroundImage: "url(images/cardimg.jpg)",
                    }}
                  >
                    <div className="info d-block align-center">
                      <h1 className="Card-title">Full Body Workout</h1>
                      <p className="description mx-3">6 week challenge</p>

                      <button className="button-35 mx-5" role="button">
                      get start
                      </button>
                    </div>
                  </div>
                </Col>

                <Col lg={4} className="my-3">
                  {" "}
                  <div
                    className="card1"
                    style={{
                      backgroundImage: "url(images/cardimg.jpg)",
                    }}
                  >
                    <div className="info d-block align-center">
                      <h1 className="Card-title">Full Body Workout</h1>
                      <p className="description mx-3">6 week challenge</p>

                      <button className="button-35 mx-5" role="button">
                      get start
                      </button>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="my-3">
                  <div
                    className="card1"
                    style={{
                      backgroundImage: "url(images/cardimg.jpg)",
                    }}
                  >
                    <div className="info d-block align-center">
                      <h1 className="Card-title">Full Body Workout</h1>
                      <p className="description mx-3">6 week challenge</p>

                      <button className="button-35 mx-5" role="button">
                       get start
                      </button>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="my-3">
                  <div
                    className="card1"
                    style={{
                      backgroundImage: "url(images/cardimg.jpg)",
                    }}
                  >
                    <div className="info d-block align-center">
                      <h1 className="Card-title">Full Body Workout</h1>
                      <p className="description mx-3">6 week challenge</p>

                      <button className="button-35 mx-5" role="button">
                       get Start
                      </button>
                    </div>
                  </div>
                </Col>



                <Col lg={4} className="my-3">
                <div className="more-container">
  <div className="more-content">
    <h1>more programs</h1>
    
  </div>
  <div class="flap"></div>
</div>
                </Col>
               





              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
