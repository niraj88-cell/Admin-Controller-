import React from 'react';
import './Home.scss';
import Sidebar from '../../components/Siderbar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Widget from '../../components/Widget/Widget';
import Featured from '../../components/Featured/Featured';
import Chart from '../../components/Chart/Chart';
import Table from '../../components/Table/Table';

const Home = () => {
  return (
    <div className='home' >
        <Sidebar/>
        <div className="homeContainer">
           <Navbar/>
           <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
           </div>
           <div className="charts">
             <Featured/> 

             <Chart title="Last 6 Months (Revenue)" aspect={2/1}/>
    
              
           </div>
           <div className="listContainer">
              <div className="listTitle">Latest Transcation</div>
              <Table/>
             </div>
        </div>


      
    </div>
  )
}

export default Home
