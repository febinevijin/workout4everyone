import React from 'react'
import './AdminSidebar.css'
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import PaidIcon from '@mui/icons-material/Paid';
import ReorderIcon from '@material-ui/icons/Reorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className='adminSidebar '>
       {/* <div className="top">
         <span className="logo">Admin</span>
       </div>
       <hr className='borderLine' /> */}

       <div className="center">
         <ul>
           <li>
             <DashboardIcon/>
             <span><Link to='/admin' style={{color:"white"}}> Dashboard</Link></span>
             </li>

             <li>
               <PersonIcon/>
              
             <span> <Link to='/usersList'  style={{color:"white"}} > Users</Link></span>
             </li>

             <li>
               <AssignmentIndOutlinedIcon/>
             <span><Link to='/trainersList'  style={{color:"white"}} > Trainers</Link></span>
             </li>

             <li>
               <PaidIcon/>
             <span><Link to='/wallet'  style={{color:"white"}} > Wallet</Link></span>
             </li>

             <li>
               <ReorderIcon/>
             <span><Link to='/application'  style={{color:"white"}}> Application</Link></span>
             </li>
         </ul>
       </div>
       <hr borderLine />

       <div className="bottom">
       < ExitToAppIcon className='ico'/>
        <span>Logout</span>
         </div>
    </div>
  )
}

export default AdminSidebar
