import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { Logincontext } from '../context/logincontext';

function Signup() {
  const {Loginfun} = useContext(Logincontext);
  let navigate = useNavigate();
    const [email , setemail] = useState("")
    const [password , setpassword]=useState("");
    const [name , setname] = useState("");
    const [skill , setskill] = useState("");
    const [institute , setinsti] = useState("");
    

    function myfun(e){
      e.preventDefault();
      axios.post('https://expreia-ai-assiment.vercel.app/api/auth/createuser', {
        "name":name,
        "email":email,
        "password":password,
        "skill":skill,
        "college":institute
      })
      .then(function (response) {
        localStorage.setItem("token", response.data.token);
        alert("signup succesfull");
        console.log(response)
        Loginfun()
        navigate("/Home")
      })
      .catch(function (error) {
        console.log(error);
      });
    }
 
    return (
      <div className="Signup">
             <form onSubmit={myfun}>
             <input type="text" placeholder="Name"  onChange={(e) => setname(e.target.value)}/>
            <input type="text" placeholder="Email"  onChange={(e) => setemail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)}/>
            <input type="text" placeholder="skills"  onChange={(e) => setskill(e.target.value)}/>
            <input type="text" placeholder="college"  onChange={(e) => setinsti(e.target.value)}/>
            <button type="submit">Signup</button> 
        </form>
      </div>
    );
  }
  
  export default Signup;