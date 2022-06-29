import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './RightSideProfile.css'


const RightSideProfile = () => {

    const [value, setValue] = useState("")

    let userProfile = async ()=> {

        const config = {
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
          };


        const {data} = await axios.get("https://backend.workout4everyone.ml/api/users/userProfile", config)
      console.log(data);
        setValue(data)

        
    }
    

   useEffect(() => {
       try {

        userProfile()
           
       } catch (error) {
           
       }
   
   }, [])
   




  return (
    <div className='container-fluid'>
       
                <div className="card-header mt-2">Profile</div>
                <div className="card-body">
                    <form >
                        {/* <!-- Form Group (username)--> */}
                        
                        {/* <!-- Form Row--> */}
                        <div className="row gx-3 mb-3">
                            {/* <!-- Form Group (first name)--> */}
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputFirstName">First name</label>
                                <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value={value.name}/>
                            </div>
                            {/* <!-- Form Group (last name)--> */}
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputLastName">Last name</label>
                                <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                            </div>
                        </div>
                        {/* <!-- Form Row        --> */}
                        
                        {/* <!-- Form Group (email address)--> */}
                        <div className="mb-3">
                            <label className="small mb-1" for="inputEmailAddress">Email address</label>
                            <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value={value.email}/>
                        </div>
                        {/* <!-- Form Row--> */}
                        <div className="row gx-3 mb-3">
                            {/* <!-- Form Group (phone number)--> */}
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputPhone">Phone number</label>
                                <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number"/>
                            </div>
                            {/* <!-- Form Group (birthday)--> */}
                         
                        </div>
                        {/* <!-- Save changes button--> */}
                        <div className='saveBtn '>
     <button className="btn btn-primary my-3 " type="button">Save changes</button>
     </div>
                    </form>
                </div>
           
      
    </div>
   
  )
}

export default RightSideProfile