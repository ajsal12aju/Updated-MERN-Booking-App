import React, { useContext } from 'react'
import "./sidebar.scss" 
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import HotelIcon from '@mui/icons-material/Hotel';
import HouseIcon from '@mui/icons-material/Room';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
// import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
// import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';


function Sidebar() {
  const { dispatch } = useContext(DarkModeContext)
  return (

    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className='logo'>Booking Admin</span>  
        </Link>
      </div>
      <hr />
      <div className="center">
         <ul>
            <p className="title">MAIN</p>
            <Link to="/" style={{textDecoration:"none"}}>
            <li> <DashboardIcon className='icon' /><span>Dashboard</span></li>
            </Link>
            <p className="title">LISTS</p>
            <Link to="/users" style={{textDecoration:"none"}}>
            <li> <GroupIcon  className='icon'/><span>Users</span></li>
            </Link>
            <Link to="/hotels" style={{textDecoration:"none"}}>
            <li> <HotelIcon  className='icon'/><span>Hotels</span></li>
            </Link>
            <Link to="/rooms" style={{textDecoration:"none"}}>
            <li> <HouseIcon  className='icon'/><span>Rooms</span></li>
            </Link>
           
           
            <p className="title">SERVICES</p>
            <li> <AppSettingsAltIcon  className='icon'/><span>Setting</span></li>
            <p className="title">USER</p>
            <li> <AccountBoxIcon  className='icon'/><span>Profile</span></li>
          <Link to='/login' style={{textDecoration:"none"}} ><li> <LogoutIcon  className='icon'/><span>Logout</span></li></Link>
         </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}>

        </div>
        <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}>
          
        </div>
      </div>    
    </div>
  )
}

export default Sidebar
