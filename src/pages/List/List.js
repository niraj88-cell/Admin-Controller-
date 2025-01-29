import React from 'react';
import Sidebar from '../../components/Siderbar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Datatable from '../../components/Datatable/Datatable';
import './List.scss';


const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable/>
       
      </div>
    </div>
  );
};  

export default List;