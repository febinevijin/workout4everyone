import React, {useState,useEffect} from "react";
import Footer from "../../components/user/Footer";
import Header from "../../components/user/Header";
import { Col, Container, Row } from "react-bootstrap";
import "./HomeScreen.css";

import axios from 'axios'
import { useNavigate,Navigate } from "react-router-dom";
import Banner from "./banner/Banner";
import Promotion from "./Promotion";
import ProgramOne from "./proOne/ProgramOne";
import ProgramTwo from "./proTwo/ProgramTwo";
import Cards from "./card/Cards";



const HomeScreen = () => {
 
 
 



const [products, setProducts] = useState([])
// const navigate = useNavigate()

// useEffect( () => {
//   // console.log("helloworld");
//  const fetchProducts = async() => {
//    const { data } = await axios.get('https://backend.workout4everyone.ml/api/products')
// // console.log(data);
//    setProducts(data)
//  }
//  fetchProducts()
// },[])

// useEffect(() => {
//   const userInfo = localStorage.getItem("userInfo")
  
//   if (userInfo) {
//     navigate('/')
//   } else {
//     navigate("/loginUser")
//   }
// }, [Navigate])

  return (
    <>
      
      <Header /> 

         <Banner/>
         <Promotion  />
         <ProgramOne/>
         <ProgramTwo/>
         <Cards/>
        

      <Footer />
     
    </>
  );
};

export default HomeScreen;
