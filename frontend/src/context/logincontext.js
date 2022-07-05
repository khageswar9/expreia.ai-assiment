import { createContext,useEffect,useState } from "react";



const Logincontext = createContext();

const Loginprovider = ({children}) => {
    const [login, setlogin] = useState(false);
    const [singledata, setsingledata] = useState({});
    function Logoutfun() {
        setlogin(false);
    }
    function Loginfun() {
        setlogin(true);
    }
    function adddata(data) {
        setsingledata(data);
    }
    useEffect(()=>{
        var x = localStorage.getItem("token");
        if(x){
            Loginfun()
        }
    },[login,singledata])
 return (
     <Logincontext.Provider value ={{login, Loginfun,Logoutfun,singledata,adddata}}>{children}</Logincontext.Provider>
 )
} 
export {Loginprovider, Logincontext};