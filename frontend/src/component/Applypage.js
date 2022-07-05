import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Applypage() {
    let navigate = useNavigate();
    const [data , setdata] = useState("");

    function submit(){
        if(data){
            alert("submmit succefull");
            navigate("/Home")
        }else{
            alert("fill the data")
        }
    }
  return (
    <div className='apply'>
        <textarea placeholder='Give details about you'rows="8" cols="50" onChange={(e)=>{setdata(e.target.value)}}/><br/>
        <button onClick={()=>{submit()}}>Submit</button>
    </div>
  )
}
export default Applypage