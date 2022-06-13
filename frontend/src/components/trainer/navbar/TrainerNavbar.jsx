import React, { useState } from 'react'
import './TrainerNavbar.css'

import {Link} from 'react-router-dom'

const TrainerNavbar = () => {

   
const [value, setValue] = useState()
console.log(value);
  return (
    <div className='navbarList '>
      


<ul className="listmenu py-4">
    <li>
   {value === 1 ? <Link to="/trainerHomepage" className='OnClick'  > Dashbord</Link> :  <Link to="/trainerHomepage"  onClick={()=> setValue(1)} > Dashbord</Link>}
       </li>
       <li>
       {value === 2 ? <Link to="/trainerVideo" className='OnClick'  > Video</Link> :  <Link to="/trainerVideo"  onClick={()=> setValue(2)} > Video</Link>}
       </li>
       <li>
       {value === 3 ? <Link to="/trainerHomepage" className='OnClick'  > Profile</Link> :  <Link to="/trainerProfile"  onClick={()=> setValue(3)} > Profile</Link>}
       </li>
       <li>
       {value === 4 ? <Link to="/trainerHomepage"  className='OnClick' > Client</Link> :  <Link to="/trainerHomepage"  onClick={()=> setValue(4)} > Client</Link>}
       </li>
       <li>
       {value === 5 ? <Link to="/trainerHomepage"  className='OnClick' > Chat</Link> :  <Link to="/trainerHomepage"  onClick={()=> setValue(5)} > Chat</Link>}
       </li>
  
</ul>  


      
    </div>
  )
}

export default TrainerNavbar