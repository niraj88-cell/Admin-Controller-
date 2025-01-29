import React, { useContext } from 'react'
import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../Context/darkModeContext';
const Sidebar = () => {
    const {dispatch}=useContext(DarkModeContext);
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className='logo'>AdminNJr</span>
            </Link>
         
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title"> MAIN</p>
                <li>
                    <DashboardIcon className='icons'/>
                    <span>Dashboard</span>
                </li>

                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                <li>
                  
                    <PersonIcon className='icons'/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to="/products" style={{textDecoration:"none"}}>
                <li>
                    <ProductionQuantityLimitsIcon className='icons'/>
                    <span>products</span>
                </li>
                </Link>
                <li>
                    <BookmarkBorderIcon className='icons'/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className='icons'/>
                    <span>Delivery</span>
                </li>

                <p className="title">USEFUL</p>
            
                <li>
                    <QueryStatsIcon className='icons'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsIcon className='icons'/>
                    <span>Notfication</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <HealthAndSafetyIcon className='icons'/>
                    <span>System Health</span>
                </li>
            
            
                <li>
                    <BookIcon className='icons'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className='icons'/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
            
                <li>
                    <AccountCircleIcon className='icons'/>
                    <span>Profile</span>
                </li>
            
                <li>
                    <LogoutIcon className='icons'/>
                    <span>Logout</span>
                </li>
            


            
            </ul>

        </div>
        <div className="bottom">
       <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}>

       </div>
       <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}>
        
        </div>
     
        </div>
      
    </div>
  )
}

export default Sidebar
