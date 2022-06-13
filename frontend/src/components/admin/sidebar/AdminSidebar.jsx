import React from 'react'
import './AdminSidebar.css'
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
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
             <span><Link to='/admin' > Dashboard</Link></span>
             </li>

             <li>
               <PersonIcon/>
              
             <span> <Link to='/usersList' > Users</Link></span>
             </li>

             <li>
               <AssignmentIndOutlinedIcon/>
             <span><Link to='/trainersList' > Trainers</Link></span>
             </li>

             <li>
               <FitnessCenterIcon/>
             <span>workout</span>
             </li>

             <li>
               <ReorderIcon/>
             <span><Link to='/application' > Application</Link></span>
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
