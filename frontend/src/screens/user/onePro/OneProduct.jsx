import React, { useEffect, useState } from "react";
import Header from "../../../components/user/Header";
import "./OneProduct.css";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { Col, Container, Row } from "react-bootstrap";
import SingleProHeader from "../../../components/user/oneProduct/SingleProHeader";
import SingleProSideCard from "../../../components/user/oneProduct/SingleProSideCard";
import SingleProRightSide from "../../../components/user/oneProduct/SingleProRightSide";
import { useParams } from "react-router-dom";
import axios from "axios";

const OneProduct = () => {
  const params = useParams()
  const [singlePro,setSinglePro] = useState()

  const singleWorkout = async ()=>{
    const {data} = await axios.get(`http://localhost:5000/api/users/getSingleWorkout/${params.id}`)
   console.log(data);
    setSinglePro(data)
  }

  useEffect(() => {
  try {
    singleWorkout()
  } catch (error) {
    
  }
  }, [])
  


  return (
    <>
      <Header />
      <SingleProHeader />

      <div className="proDetail d-flex">
        <div className="proLeftCard container-fluid">
          <SingleProSideCard singlePro = {singlePro}/>
        </div>

        <div className="proRight mt-1">
          <SingleProRightSide singlePro = {singlePro} />
        </div>
      </div>
    </>
  );
};

export default OneProduct;
