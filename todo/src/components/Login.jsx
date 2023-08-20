import React from "react"
import '../CSS/Login.css'
import {Navbaar} from './Navbaar'
import { useNavigate } from "react-router-dom";
const details = {
    email:"",
    password:"",
}
export const Login = ()=>{
   const [user,setuser] = React.useState(details);
   const navigate = useNavigate();
   const Savechange = (e)=>{
    const {name,value} = e;
    setuser((info)=>(
        {
            ...info,
            [name]:value
    
        }
    ))
   }
   const CheckAndMatch = ()=>{
       const {password,email} = user;
       if(password === "" || email === ""){
          alert("fill all details first");
       }else{
        const userData = JSON.parse(localStorage.getItem("userData"))||{};
        if(userData && userData.email === email && userData.password===password){
            alert("Login successfull")
            userData.login = true;
            localStorage.setItem("userData",JSON.stringify(userData));
            navigate('/todos')
        }else{
            alert("user is not present");
        }
        
       }
   }
    return (
       <div>
        <div>
            <Navbaar/>
        </div>
         <div id="loginSignup">
           <form onChange={(e)=>Savechange(e.target)} action="Signupform">
           <h1>Login</h1>
           <label htmlFor="email">Enter Email</label>
           <input type="text" name="email" value={user.email} placeholder="Enter Email" />
           <label htmlFor="email">Enter Password</label>
           <input type="text" name="password" value={user.password} placeholder="Enter Password" />
           <input type="submit" onClick={(e)=>{
            e.preventDefault();
            CheckAndMatch();
           }} value="Submit" />
           </form>
        </div>
       </div>
    )
}