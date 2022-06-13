import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap'
import './TestScreen.css'



export default function TestScreen() {

  const [value, setValue] = useState(1)



  return (
    <>
      <div className="container">
      {/* <button className="btnnn" >hi</button> */}
      {value === 1 ? <button className="btnnn" >hi</button> : <button className="bt" onClick={()=>setValue(1)}>hi</button> }
      {value === 2? <button className="btnnn" >hi</button> : <button className="bt" onClick={()=>setValue(2)}>hi</button> }
      {value === 3 ? <button className="btnnn" >hi</button> : <button className="bt" onClick={()=>setValue(3)}>hi</button> }
      </div>

      <div className="container">

      </div>






    </>
  );
}
