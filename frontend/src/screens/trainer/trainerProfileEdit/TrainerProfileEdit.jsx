import React from "react";
import { Col, Row } from "react-bootstrap";
import TraainerHeader from "../../../components/trainer/header/TrainerHeader";
import TrainerNavbar from "../../../components/trainer/navbar/TrainerNavbar";

const TrainerProfileEdit = () => {
  return (
    <>
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
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
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
                      value="dey-dey"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Email:</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="text"
                      value="janesemail@gmail.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-lg-3 control-label">Mobile</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="text"
                      value="janesemail"
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
    </>
  );
};

export default TrainerProfileEdit;
