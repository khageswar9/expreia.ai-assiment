import { useEffect, useState } from "react";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Logincontext } from '../context/logincontext';


function Home() {
    const [jobs , setjobs] = useState([])
    const [filter , setfilter] = useState("")
    const {adddata} = useContext(Logincontext)
    let navigate = useNavigate();
    useEffect(()=>{
       async function getdata(){
            var x = await fetch(`https://expreia-ai-assiment.vercel.app/fetchalljobs`)
            var y = await x.json();
            setjobs(y);
        }
        getdata()
    },[])
    function storsingledata(data){
        adddata(data)
        navigate("/Details")
    }

  return (
    <div className="Home">
            <div className="serchdiv">
                <input type="text" placeholder="Serch job by title" onChange={(e)=>{setfilter(e.target.value)}}/>
            </div>
            <div>
            {jobs.filter((job)=>job.title.includes(filter)).map((e)=>{
                return (<div className="content" onClick={()=>{storsingledata(e)}}>
                    <div>
                        <p>Title : {e.title}</p>
                        <span>Description : {e.description}</span><br/>
                        <span>CTC : {e.ctc}</span>
                    </div>
                    <div><button>Apply</button></div>
                </div>)
            })}

            </div>
    </div>
  );
}

export default Home;