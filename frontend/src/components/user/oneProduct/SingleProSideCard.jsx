import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./SingleProSideCard.css";
import { PayPalButton } from 'react-paypal-button-v2'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const SingleProSideCard = ({singlePro}) => {
  let navigate = useNavigate()
  const params = useParams()
 
  const [status, setStatus] = useState('')
  const [sdkReady, setSdkReady] = useState(false);
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
const checkOutWorkout = async (id)=>{
  // console.log(id);

  try{
    const config = {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get(
      `http://localhost:5000/api/users/getCheckOutWorkout/${id}`,
      config
    );
console.log(response.data.status);
setStatus(response.data.status)
  }catch(err){
    console.log(err);
  }
}

useEffect(() => {

  console.log(singlePro);
  checkOutWorkout(params.id)


}, [])
 
  
 

  const submitPaymentHandler = (paymentResult) => {
  //  console.log(paymentResult,'ooooooooooooooo');
  //  console.log(paymentResult.id,paymentResult.status);
  const productId = singlePro._id
  const price = singlePro.price
  const trainerId = singlePro.trainerId
    const workoutName = singlePro.name
  const trainerName = singlePro.trainerName
  // console.log(productId,price,trainerId);
   try {

    const config = {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-type": "application/json",
      },
    };
    const {data} = axios.post('http://localhost:5000/api/order/placeOrder',{productId,price,trainerId,workoutName,trainerName},config)
    // console.log(data);
    alert('program added in MyWorkout')
    navigate('/myWorkout')
   } catch (error) {
    console.log(error);
   }
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
          <h4>{singlePro?.week} week program</h4>
          <h5>Trainer : {singlePro?.trainerName}</h5>
        {status ?  <button className="button-28" role="button" onClick={()=>addPayPalScript()} >
            Buy Now
          </button>: <button className="button-28" role="button"  >
            purchased 
          </button>}
         
        </div>
          <div className="my-5">
            {sdkReady && <PayPalButton amount={singlePro?.price} onSuccess={submitPaymentHandler} /> }
          
          </div>
      </div>
    </>
  );
};

export default SingleProSideCard;
