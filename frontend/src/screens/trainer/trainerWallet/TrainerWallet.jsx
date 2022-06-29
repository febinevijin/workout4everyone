import React, { useEffect, useState } from 'react'
import TraainerHeader from '../../../components/trainer/header/TrainerHeader'
import TrainerNavbar from '../../../components/trainer/navbar/TrainerNavbar'
import './TrainerWallet.css'
import {Button, Card} from 'react-bootstrap';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import axios from 'axios';

const TrainerWallet = () => {
  const [orderDetails, setOrderDetails] = useState('')

    let Order = async () => {

        const config = {
            withCredentials: true,
            headers: {
              'Access-Control-Allow-Origin': '*',
              "Content-type": "application/json",
            },
          };

        const {data} = await axios.get("https://backend.workout4everyone.ml/api/trainer/OrderDetails",config)
        setOrderDetails(data)
    }

    useEffect(() => {
        Order()
    }, [])
    


  return (
    <div>
         <TraainerHeader />
      <TrainerNavbar />

      <div className="container-fluid d-flex walletCont my-5">
      <Card className="text-center w-75" >
      <Card.Header style={{backgroundColor:'#ecf5f9'}}>My Wallet</Card.Header>
      <Card.Body>
        <AccountBalanceWalletIcon className="walletIcon"/>
        <Card.Title>Total Balance</Card.Title>
        <Card.Text>
        { orderDetails && orderDetails.reduce((accu,amount) =>  accu + amount.trainerPrice ,0) 
        }
       
        </Card.Text>

          {
            orderDetails && orderDetails.map ((data) => (

        <Card.Text className='history'>
        <p class="txn-list">{data.workoutName}<span class="credit-amount">${data.trainerPrice}</span></p>
        </Card.Text>
            ))
          }

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted"> Workout 4 Everyone</Card.Footer>
    </Card>
      </div>

    </div>
  )
}

export default TrainerWallet