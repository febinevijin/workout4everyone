import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = () => {
    const [myWorkout, setMyWorkout] = useState('')
  let getWorkout = async () => {
    const config = {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get(
      "https://backend.workout4everyone.ml/api/users/getMyWorkout",
      config
    );
   let  Workout=response.data
    console.log(Workout);
    setMyWorkout(Workout)
  };

  useEffect(() => {
    getWorkout();
  }, []);

  return (
    <div className="container-fluid">
        {myWorkout && myWorkout.map ((data) => (

<Row className="workContainer my-3" key={data._id}>
<Col className="workCol">
  <div className="preview-container">
    <img
      className="workImg"
      src={data.previewUrl}
      alt=""
    />
  </div>

  <div className="programDetails">
    <p>{data.name}</p>
    <p>{data.week} week challenge</p>
    <p>bt trainer</p>
  </div>

  <div className="viewButton">
    <button class="button28" role="button">
      <Link to={`/videoPlayer/${data._id}`}>Start Program</Link>
    </button>
  </div>
</Col>
</Row>

        ))}
     

     
    </div>
  );
};

export default Cart;
