import React from 'react';
import './Widget.scss';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { AccountBalanceOutlined, MonetizationOnOutlined, PersonOutlined, ShoppingCartCheckoutOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Widget = ({type}) => {

    let data = {
        title: "DEFAULT",
        ismoney: false,
        link: "No link available",
        icon: null,
    };

    const amount = 100;
    const diff = 20;

    switch(type){
        case "user":
            data = {
                title: "USERS",
                ismoney: false,
                link: "See all users",
                icon: <PersonOutlined className='icon'  style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2"}}/>
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                ismoney: false,
                link: "View all orders",
                icon: <ShoppingCartCheckoutOutlined className='icon' style={{color:"goldenrod",backgroundColor:"rgba(218,165,32,0.2"}} />
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                ismoney: true,
                link: "View net earnings", 
                icon: <MonetizationOnOutlined className='icon' style={{color:"green",backgroundColor:"rgba(0,128,0,0.2"}} />
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                ismoney: true,
                link: "See details",
                icon: <AccountBalanceOutlined className='icon' style={{color:"purple",backgroundColor:"rgba(128,0,128,0.2"}} />
            };
            break;
        default:
            break;
    }

    const linkMapping = {
        "See all users": "/list",
        "View all orders": "/orders",
        "View net earnings": "/earnings",
        "See details": "/balance",
    };
    

    return (
        <div className='widget'>
            <div className="left">
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.ismoney && "$"} {amount}</span>
                <Link 
                to={linkMapping[data.link] || "#"} 
                style={{ textDecoration: "none" }} 
                className="link"
            >
                <span className='link'>{data.link}</span>
            </Link>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ArrowDropUpIcon/>
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    );
}

export default Widget;
