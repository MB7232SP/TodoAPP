import '../CSS/Navbaar.css'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
export const Navbaar = ()=>{
   const [user,setuserdata] = React.useState({});
   const navigate = useNavigate();
   React.useEffect(()=>{
    const userdata = JSON.parse(localStorage.getItem("userData"))||{};
    setuserdata(userdata);
   },[]);
   const logoutUser = ()=>{
    setuserdata(pre=>({
        ...pre,
        login:false
    }))
    localStorage.setItem("userData", JSON.stringify({...user,login:false}));
    alert("Logout SuccessFull");
    navigate('/login')
   }
    return (<div id="navbaar">
        <div>
        <Link style={{display: user.login ? "none" : "block"}} to={"/login"}><h3>Login</h3></Link>
        <h3 style={{display: user.login ? "block" : "none"}}>{`Hello ${user.name}`}</h3>
        <Link style={{display: user.login ? "none" : "block"}} to={'/signup'}><h3>Signup</h3></Link>
        
        <Link to={'/todos'}><h3>My Todos</h3></Link>
        <Link to={'/dropdown'}><h3>Dropdown Practice</h3></Link>
        </div>
        <div>
        <h1>TODO APP</h1>

        </div>
        <div>
            <h3 onClick={()=>{
                logoutUser();
            }} style={{display: user.login ? "block" : "none"}}>Logout</h3>
        </div>
    </div>)
}