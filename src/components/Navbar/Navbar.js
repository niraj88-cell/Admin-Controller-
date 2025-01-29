import React, { useContext } from 'react'
import "./Navbar.scss";
import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListAltOutlined, NotificationAddOutlined, SearchOffOutlined } from '@mui/icons-material';
import { DarkModeContext } from '../../Context/darkModeContext';

const Navbar = () => {
    const {dispatch}=useContext(DarkModeContext);
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
                <input type="text" name="" id="" placeholder='search...' />
                <SearchOffOutlined/>
            </div>
            <div className="items">
                <div className="item">
                    <LanguageOutlined className='icon'/>
                    English
                </div>
                <div className="item">
                    <DarkModeOutlined className='icon' onClick={()=>dispatch({type:"TOGGLE"})}/>
                  
                </div>
                <div className="item">
                    <FullscreenExitOutlined className='icon'/>
                   
                </div>
                <div className="item">
                   <NotificationAddOutlined className='icon'/>
                   <div className="counter">1</div>
             
                </div>
                <div className="item">
                   <ChatBubbleOutlineOutlined className='icon'/>
                   <div className="counter">1</div>
            
                </div>
                <div className="item">
                   <ListAltOutlined className='icon'/>
                
                </div>
                <div className="item">
                   <img src="./pp.jpeg" alt="" className='avatar' />
                 
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Navbar
