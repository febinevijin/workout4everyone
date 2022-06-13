import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../../../components/user/Header'
import './VideoPlayer.css'
import {DefaultPlayer as Video} from 'react-html5video'


const VideoPlayer = () => {
  return (
    <div>
        <Header/>
        <div className='container-fluid mt-5'>
            <Row>
                <Col>
                <div className="video-content">
                <video width="100%" height="450" poster="\images\back.jpg" controls  >
                    <source src=" \play\THOR_4_Love_and_Thunder_FINAL_TRAILER_3_XMif6YCvujo_135.mp4" />
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