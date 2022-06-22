import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PayPalButton } from 'react-paypal-button-v2'

const WalletMoadal = ({details}) => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

const submitPaymentHandler = (paymentResult) => {
    const orderId = details._id
    const trainerPrice = details.trainerPrice
    
  

 
   
    try {
 
     const config = {
       withCredentials: true,
       headers: {
         'Access-Control-Allow-Origin': '*',
         "Content-type": "application/json",
       },
     };
     const response = axios.post('http://localhost:5000/api/order/distributeMoney',{orderId,trainerPrice},config)
    
     alert('payment is done')
    
    } catch (error) {
     console.log(error);
    }
 }

  return (
    <div>
        
        <Button variant="primary" onClick={handleShow}>
        Pay
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>



        <Modal.Body>
            
            <div>
                <p>amount is : {details.trainerPrice}</p>
            </div>
            <div>
            <button className="button-28" role="button" onClick={()=>addPayPalScript()} >
            pay 
          </button>
            </div>

            <div className="my-5">
            { sdkReady && <PayPalButton  amount={details.trainerPrice}  onSuccess={submitPaymentHandler}/> }
          
          </div>

        </Modal.Body>



        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default WalletMoadal