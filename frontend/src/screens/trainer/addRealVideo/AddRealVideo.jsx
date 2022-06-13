import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TraainerHeader from '../../../components/trainer/header/TrainerHeader';
import TrainerNavbar from '../../../components/trainer/navbar/TrainerNavbar';
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const AddRealVideo = () => {
    const [videoName, setVideoName] = useState("");
    const [previewSource, setPreviewSource] = useState("");
    let navigate = useNavigate();

    const handleVideo = (e) => {
        const file = e.target.files[0];
        setVideoName(e.target.files[0]);
        // console.log(e.target.files[0])
        // previewFile(file)
      };

      const submitVideoWorkout = async (e) => {
        const video = videoName;
        
     e.preventDefault();
    
       
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
            "http://localhost:5000/api/trainer/postTrainerWorkoutVideo",
            {video},
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
      <div className="container-fluid mt-5 p-5">

        <div >
          <div className=" my-5">
            <p>Stage 2</p>
          </div>
          </div>


          <Form onSubmit={submitVideoWorkout} >


  <Form.Group controlId="formFile" className="mb-3 col-lg-6">
    <Form.Label>Default file input example</Form.Label>
    <Form.Control 
                type="file"
                name="video"
                
                onChange={handleVideo} />
  </Form.Group>


<div className="my-3">
  <Button  variant="primary" type="submit ">
    Submit
  </Button>
  </div>
</Form>
          </div>
    </div>
  )
}

export default AddRealVideo