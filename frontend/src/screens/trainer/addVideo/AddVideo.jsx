import axios from "axios";
import React, { useState } from "react";
import TraainerHeader from "../../../components/trainer/header/TrainerHeader";
import TrainerNavbar from "../../../components/trainer/navbar/TrainerNavbar";
import "./AddVideo.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddVideo = () => {
  const [workout, setWorkout] = useState("");
  const [price, setPrice] = useState("");
  const [week, setWeek] = useState("");
  const [description, setDescription] = useState("");

  const [videoName, setVideoName] = useState("");
  const [videoSource, setVideoSource] = useState("");

  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");

  let navigate = useNavigate();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    // console.log(file.name);
    // let imageName =file.name
    setFileInputState(e.target.value);
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleVideo = (e) => {
    const file = e.target.files[0];
    setVideoName(e.target.files[0]);
    // console.log(e.target.files[0])
    // previewFile(file)
  };

  // const previewFile = (file)=>{
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file)
  //     reader.onloadend = () =>{
  //       setVideoSource(reader.result)
  //     }
  //   }

  const submitWorkout = async (e) => {
    const video = videoName;
    const image = previewSource;

    console.log(workout, price, description);

    // const form = new FormData();

    // form.append("workout", workout);
    // form.append("price", price);
    // form.append("description", description);
    // form.append("image", image);
    // form.append("video", video);

    e.preventDefault();

    // console.log(form);
    try {
      const config = {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "multipart/form-data",
        },
      };

      // const config = {
      //     headers:{
      //       "Content-type":"multipart/form-data",

      //     }
      //   }

      const { data } = await axios.post(
        "http://localhost:5000/api/trainer/postTrainerWorkout",
        {workout, price,week, description,image,video},
        config
      );
      if (data) {
        alert(data);
        navigate('/trainerHomePage')
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <TraainerHeader />
      <TrainerNavbar />

      <div className="container-fluid addContainer mt-5 p-5">

        <div className="addVideoContainer">
          <div className="newVideo my-5">
            <p>Stage 1</p>
          </div>
          {/* <form onSubmit={submitWorkout}>
            <div className="workout mt-3">
              <p>Wokout name</p>
              <input
                type="text"
                placeholder="enter workout name"
                value={workout}
                onChange={(e) => setWorkout(e.target.value)}
              />
            </div>

            <div className="workoutPrice mt-3 ">
              <p>Price</p>
              <input
                type="text"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="workoutDesc  mt-3">
              <p>Decription</p>
              <input
                type="text"
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="workoutThumbnail mt-5">
              <p>+</p>
              <p>upload thumbnail</p>
              <input
                type="file"
                name="image"
                value={fileInputState}
                onChange={handleFileInputChange}
              />
            </div>

            {previewSource && (
              <img
                src={previewSource}
                alt="choosen"
                style={{ height: "100px", width: "100px" }}
              />
            )}

            <div className="workoutVideo  my-5">
              
              <input
                type="file"
                name="video"
                
                onChange={handleVideo}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form> */}



          <Form onSubmit={submitWorkout} >
  <Form.Group className="mb-3 col-lg-6" >
    <Form.Label>Program Name</Form.Label>
    <Form.Control type="text"
                placeholder="enter workout name"
                value={workout}
                onChange={(e) => setWorkout(e.target.value)} />
   
  </Form.Group>

  {/* <Form.Group className="mb-3 col-lg-6" >
    <Form.Label>Program duration</Form.Label>
    <Form.Control type="password" placeholder="Enter program duration" />
    
  </Form.Group> */}

  <Form.Group className="mb-3 col-lg-6" >
    <Form.Label>Price</Form.Label>
    <Form.Control type="text"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)} />
    
  </Form.Group>

  <Form.Group className="mb-3 col-lg-6" >
    <Form.Label>Weeks</Form.Label>
    <Form.Control type="text"
                placeholder="Enter the duration of program"
                value={week}
                onChange={(e) => setWeek(e.target.value)} />
    
  </Form.Group>

  <Form.Group className="mb-3 col-lg-6" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} 
    type="text"
    placeholder="description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}/>
  </Form.Group>

  <Form.Group controlId="formFile" className="mb-3 col-lg-6">
    <Form.Label>Default file input example</Form.Label>
    <Form.Control type="file"
                name="image"
                value={fileInputState}
                onChange={handleFileInputChange} />
  </Form.Group>

  {previewSource && (
              <img
                src={previewSource}
                alt="choosen"
                style={{ height: "100px", width: "100px" }}
              />
            )}
<div className="my-3">

<Form.Group controlId="formFile" className="mb-3 col-lg-6">
    <Form.Label>Default file input example</Form.Label>
    <Form.Control 
                type="file"
                name="video"
                
                onChange={handleVideo} />
  </Form.Group>
  <Button  variant="primary" type="submit ">
    Submit
  </Button>
  </div>
</Form>



        </div>


     



      </div>





    </div>
  );
};

export default AddVideo;
