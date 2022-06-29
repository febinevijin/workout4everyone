import React, { useEffect, useState } from 'react'
import './Wallet.css'
import { Card, Col, Row } from 'react-bootstrap'
import AdminHeader from '../../../components/admin/Header/AdminHeader'
import AdminSidebar from '../../../components/admin/sidebar/AdminSidebar'
import axios from 'axios'

import WalletMoadal from '../../../components/admin/walletModal/WalletMoadal'


const Wallet = () => {

    const [details, setDetails] = useState('')
    
    const [user, setUser] = useState('')

    

    



    const order = async () =>{
        const {data} = await axios.get("https://backend.workout4everyone.ml/api/admin/orderDetails")
        setDetails(data);
        
    }



   







    
    useEffect(() => {
         order()
         
    }, [])

  return (
    <>
    <AdminHeader/>
    <Row>
        <Col lg={2}>
        <AdminSidebar/>
        </Col>

       <Col lg={10}>
     
        

       <div class="container-fluid mt-5">
        <Row>
            {details && details.map ((det)=>(
                det.paymentStatus ? null:
                        <Col lg={4} className=" my-3">
                        <div className="cardWallet p-3">
                            <div className="d-flex flex-row mb-3"><img src="https://cdn.jotfor.ms/p/paypal/assets/img-min//paypal-personal.png" width="70"/>
                                <div className="d-flex flex-column mx-5"><span>Trainer: {det.trainerName}</span><span className="text-black-50">trainer Id: {det.trainerId}</span>
                               </div>
                            </div>
                            <h6>workout name: <span className='special'>{det.workoutName}</span></h6>
                            <h6>workout Id: <span className='special'>{det.productId}</span> </h6>
                            <h6>Toatal price: <span className='special'>{det.price}</span> </h6>
                            <div className="d-flex justify-content-between install mt-3">
                                <span><h4>trainer amount: {det.trainerPrice}</h4></span>
                                {/* <button className="button-28" role="button" onClick={()=>addPayPalScript()} >
            pay 
          </button> */}
                                </div>
                                {/* <div className="my-5">
            { sdkReady && <PayPalButton  amount={det.trainerPrice}  onSuccess={submitPaymentHandler}/> }
          
          </div> */}

          <WalletMoadal details = {det} />
                        </div>
                    
                    </Col>
            ))}
        
          
        </Row>
       </div>

       </Col>
        
    </Row>

    </>
  )
}

export default Wallet