import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Footer from '../../../components/user/Footer'
import Header from '../../../components/user/Header'
import ProductItems from '../../../components/user/product/ProductItems'
import ProHeader from '../../../components/user/productHeader/ProHeader'

const Product = () => {

  let navigate = useNavigate();


  useEffect( () =>{
    const userInfo = localStorage.getItem("userInfo")
    console.log(userInfo);
    if (!userInfo) {
      navigate("/choosepage")
    }
    //  else {
    //   navigate("/choosepage")
    // }
  }, [navigate])

  return (
<>
<Header/>


    <ProductItems />

        <Footer/>
</>
  )
}

export default Product