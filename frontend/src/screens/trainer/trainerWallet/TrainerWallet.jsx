import React, { useEffect } from 'react'
import TraainerHeader from '../../../components/trainer/header/TrainerHeader'
import TrainerNavbar from '../../../components/trainer/navbar/TrainerNavbar'
import './TrainerWallet.css'
import {Button, Card} from 'react-bootstrap';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import axios from 'axios';

const TrainerWallet = () => {

    let Order = async () => {

        const config = {
            withCredentials: true,
            headers: {
              'Access-Control-Allow-Origin': '*',
              "Content-type": "application/json",
            },
          };

        const {data} = await axios.get("http://localhost:5000/api/trainer/OrderDetails",config)
        console.log(data);
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
         1200
        </Card.Text>

        <Card.Text className='history'>
        <p class="txn-list">Payment to xyz shop<span class="credit-amount">$100</span></p>
        </Card.Text>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted"> Workout 4 Everyone</Card.Footer>
    </Card>
      </div>

    </div>
  )
}

export default TrainerWallet