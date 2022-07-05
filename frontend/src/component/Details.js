import React from 'react';
import { useContext } from 'react';
import { Logincontext } from '../context/logincontext';
import { useNavigate } from "react-router-dom";



function Details() {
    const {singledata} = useContext(Logincontext);
    const navigate = useNavigate()
  return (
    <div className="contentdetails">
        <p>Title : {singledata.title}</p>
        <span>Description : {singledata.description}</span><br/>
        <span>CTC : {singledata.ctc}</span><br/>
        Process :{singledata.Process.map((e)=>{
             return (
                <li>{e}</li>
             )
        })}
        <button onClick={()=>{navigate("/Apply")}}>Apply</button>
    </div>
  )
}

export default Details