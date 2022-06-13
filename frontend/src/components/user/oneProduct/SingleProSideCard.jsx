import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./SingleProSideCard.css";
import { PayPalButton } from 'react-paypal-button-v2'
import axios from "axios";

const SingleProSideCard = ({singlePro}) => {

  const [sdkReady, setSdkReady] = useState(false);

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: PaypalclientId } = await axios.get('http://localhost:5000/api/config/paypal')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${PaypalclientId}`
      script.async = true
      script.onload = () => {
          setSdkReady(true)
      }
      document.body.appendChild(script)
  }

  addPayPalScript()
  }, [])
  

  const submitPaymentHandler = (paymentResult) => {
   console.log(paymentResult);
}

  return (
    <>
      <div className="proSideCard">
        <div className="imgCont">
          <img className="singleImg" src={singlePro?.previewUrl} alt="" />
        </div>

        <div className="workoutDetail">
          <h3>price: {singlePro?.price}</h3>
          <h4>{singlePro?.name}</h4>
          <h4>weeks</h4>
          <h5>trainer name</h5>

          <button className="button-28" role="button">
            Buy Now
          </button>
          <div>
            {sdkReady && <PayPalButton amount={singlePro?.price} onSuccess={submitPaymentHandler} /> }
          
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProSideCard;
