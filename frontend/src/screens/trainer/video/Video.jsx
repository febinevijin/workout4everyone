import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TraainerHeader from "../../../components/trainer/header/TrainerHeader";
import TrainerNavbar from "../../../components/trainer/navbar/TrainerNavbar";
import "./Video.css";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import axios from "axios";

const Video = () => {
  const [videoDetails, setVideoDetails] = useState("");

  let videodetails = async () => {
    const config = {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.get(
      "http://localhost:5000/api/trainer/getVideoDetails",
      config
    );
    setVideoDetails(data)
    console.log(data);
  };

  useEffect(() => {
    videodetails();
  }, []);

  return (
    <>
      <TraainerHeader />
      <TrainerNavbar />
      <Container fluid>
        <Row>
          <div className="text-end">
            <button className="mx-5 mt-2 px-5 bg-light rounded hover fw-bold border-info py-3  shadow">
              <Link className=" " to="/trainerAddVideo">
                add Video
              </Link>
            </button>
          </div>
        </Row>

        <Row className="my-5">
          <Col lg={10} className="mx-auto ">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No:</th>
                  <th>Workout</th>
                  <th>Id</th>
                  <th>No: of Users</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {videoDetails && videoDetails.map ((data,index)=>(

                <tr>
                  <td>{index+1}</td>
                  <td>{data.name}</td>
                  <td>{data._id}</td>
                  <td>{data.user.length}</td>
                  <td>
                    <Button className="mx-1">edit</Button>
                    <Button className="mx-1 ">delete</Button>
                  </td>
                </tr>
                ))}
                
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Video;
