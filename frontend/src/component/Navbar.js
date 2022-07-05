import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { Logincontext } from '../context/logincontext';

function Navbar() {
  let navigate = useNavigate();
  const {Logoutfun , login} = useContext(Logincontext);
  function myfun(){
    Logoutfun()
    localStorage.removeItem("token");
    navigate("/")
  }
  return (
    <div className="Navbar">
     <div className="logo" onClick={()=>{navigate("/ ")}}>Khageswar Job-portal</div>
     {login === false ? <div className="sign">
        <button onClick={()=>{navigate("/Login")}}>Login</button>
        <button onClick={()=>{navigate("/Signup")}}>Signup</button>
     </div>: <div className="sign"><button onClick={()=>{navigate("/Home")}}>Jobpage</button><button onClick={myfun}>Logout</button></div>}
    </div>
  );
}
export default Navbar;