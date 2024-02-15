import React, { useContext } from 'react'
import "./sidebar.scss" 
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import BookIcon from '@mui/icons-material/Book';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';


function Sidebar() {
  const { dispatch } = useContext(DarkModeContext)
  return (

    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className='logo'>lamAdmin</span>  
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
            <li> <ProductionQuantityLimitsIcon  className='icon'/><span>Hotels</span></li>
            </Link>
            <Link to="/rooms" style={{textDecoration:"none"}}>
            <li> <BookmarkBorderIcon  className='icon'/><span>Rooms</span></li>
            </Link>
            <li> <LocalShippingIcon  className='icon'/><span>Delivery</span></li>
            <p className="title">USEFUL LINKS</p>
            <li> <MilitaryTechIcon  className='icon'/><span>Status</span></li>
            <li> <CircleNotificationsIcon  className='icon'/><span>Notification</span></li>
            <p className="title">SERVICES</p>
            <li> <HealthAndSafetyIcon  className='icon'/><span>System Health</span></li>
            <li> <BookIcon  className='icon'/><span>Logs</span></li>
            <li> <AppSettingsAltIcon  className='icon'/><span>Setting</span></li>
            <p className="title">USER</p>
            <li> <AccountBoxIcon  className='icon'/><span>Profile</span></li>
            <li> <LogoutIcon  className='icon'/><span>Logout</span></li>
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
