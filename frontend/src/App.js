import './App.css';
import Navbar from './component/Navbar';
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home';
import { useContext } from 'react';
import { Logincontext } from './context/logincontext';
import { ProtectedRoute } from './component/privaterout';
import Details from './component/Details';
import Landingpage from './component/Landingpage';
import Applypage from './component/Applypage';

function App() {
  
  const {login} = useContext(Logincontext);
  return (
    <div className="App">
     <Navbar/>
     <Routes>
          <Route exact path="/" element={<Landingpage />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Signup" element={<Signup />}></Route>
          <Route exact path="/Home" element={
            <ProtectedRoute user={login}>
            <Home />
          </ProtectedRoute>
          }></Route>
          <Route exact path="/Details" element={
            <ProtectedRoute user={login}>
            <Details />
          </ProtectedRoute>
          }></Route>
          <Route exact path="/Apply" element={
            <ProtectedRoute user={login}>
            <Applypage />
          </ProtectedRoute>
          }></Route>
      </Routes>
    </div>
    
  );
}

export default App;
