import React from 'react';
import './Single.scss';
import Sidebar from "../../components/Siderbar/Sidebar"
import Navbar from '../../components/Navbar/Navbar';
import Chart from '../../components/Chart/Chart';
import List from "../../components/Table/Table"

const Single = () => {
  return (
    <div className='single'>
        <Sidebar/>
        <div className="singleContainer">
            <Navbar/>

            <div className="top">
                <div className="left">
                    <div className="editButton">
                       Edit
                    </div>

                    <h1 className="title">Information</h1>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='itemImg' alt="" />
                        <div className="detail">
                            <h1 className="itemTitle">Jane Doe</h1>
                            <div className="detailItem">
                                <span className="itemKey">Email:</span>
                                <span className="itemValue">janedoe@gmail.com</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">phone:</span>
                                <span className="itemValue">+12307777</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Address:</span>
                                <span className="itemValue">Elton St. 255 New York,USA</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Country:</span>
                                <span className="itemValue">USA</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="right">
                    <Chart aspect={3/1} title="User Spending (Last 6 months)"/>

                </div>

            </div>
            <div className="bottom">
                
            <h1 className="title">Last Transaction</h1>
                <List/>

            </div>
        </div>
      
    </div>
  )
}

export default Single
