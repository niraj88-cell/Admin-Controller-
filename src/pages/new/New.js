import React, { useState } from 'react';
import "./New.scss";
import Sidebar from '../../components/Siderbar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';

const New = ({inputs,title}) => {

    const [file,setFile]=useState("");
  return (
    <div className='new'>
        <Sidebar/>
        <div className="newContainer">
            <Navbar/>
            <div className="top">
                <h1>{title}</h1>
            </div>
            <div className="bottom">
                <div className="left">
                   <img src={file ? URL.createObjectURL(file):"/emp.jpg"} alt="" />

                </div>
                <div className="right">

                    <form action="">
                        <div className="formInput">
                            <label htmlFor="file"> Image: <DriveFolderUploadOutlined className="icon"/></label>
                            <input type="file" placeholder='' id='file' style={{display:"none"}} onChange={e=>setFile(e.target.files[0])} />
                        </div>  

                        {inputs.map((input)=>(                      
                        <div className="formInput" key={input.id}>
                            <label htmlFor="">{input.label}</label>
                            <input type="{input.type}" placeholder='{input.placeholder}' />
                        </div>

))}
                    
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default New
