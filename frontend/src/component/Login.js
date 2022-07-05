import axios from "axios";
import {useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { Logincontext } from '../context/logincontext';

function Login() {
    const {Loginfun} = useContext(Logincontext);
    let navigate = useNavigate();
    const [email , setemail] = useState("")
    const [password , setpassword]=useState("");
    function myfun(e){
        e.preventDefault();
        axios.post('https://expreia-ai-assiment.vercel.app/api/auth/login', {
          "email":email,
          "password":password
        })
        .then(function (response) {
          localStorage.setItem("token", response.data.token);
          alert("login succesfull");
          Loginfun()
          navigate("/Home")
        })
        .catch(function (error) {
          console.log(error);
          alert("somthing went wrong")
        });
      }

  return (
    <div className="Login">
            <form onSubmit={myfun}>
            <input type="text" placeholder="Email"  onChange={(e) => setemail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)}/>
            <button type="submit">Login</button> 
        </form>
    </div>
  );
}

export default Login;