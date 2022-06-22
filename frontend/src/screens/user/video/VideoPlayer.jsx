import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../../../components/user/Header'
import './VideoPlayer.css'
import {DefaultPlayer as Video} from 'react-html5video'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const VideoPlayer = () => {
    const params = useParams();
    const [videoPlay, setVideoPlay] = useState();

    const videoPlayer = async () =>{
        const config = {
            withCredentials: true,
            headers: {
              'Access-Control-Allow-Origin': '*',
              "Content-type": "application/json",
            },
          };

          const { data } = await axios.get(
            `http://localhost:5000/api/users/videoPlayer/${params.id}`, config
          );
          console.log(data);
          
          setVideoPlay(data)

    }

    useEffect(() => {
        videoPlayer()
    }, [])
    


  return (
    <div>
        <Header/>
        <div className='container-fluid mt-5'>
            <Row>
                <Col>
                <div className="video-content">
                <video width="100%" height="450" poster={videoPlay?.previewUrl} controls  >
                 { videoPlay &&  <source src={ videoPlay?.videoUrl} />}
                    {console.log(videoPlay?.videoUrl)}
                    {/* <source src="\play\THOR_4_Love_and_Thunder_FINAL_TRAILER_3_XMif6YCvujo_135.mp4" /> */}
                    Your browser does not support the video tag.
                   
                </video>
            </div>

                </Col>
            </Row>
        </div>
    </div>
  )
}

export default VideoPlayer