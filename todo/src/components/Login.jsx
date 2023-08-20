import React from "react"
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
   const CheckAndSaveDetails = ()=>{
       const {name,password,email} = user;
       if(name === "" || password === "" || email === ""){
          alert("fill all details first");
       }else{
        alert("sigup successfull")
        user.login = true;
        localStorage.setItem("userData",JSON.stringify(user));
        navigate('/todos')
       }
   }
    return (
        <div>
           <form onChange={(e)=>Savechange(e.target)} action="Signupform">
           <h1>Signup</h1>
           <label htmlFor="email">Enter Name</label>
           <input type="text" name="name" value={user.name} placeholder="Enter Name" />
           <label htmlFor="email">Enter Email</label>
           <input type="text" name="email" value={user.email} placeholder="Enter Email" />
           <label htmlFor="email">Create Password</label>
           <input type="text" name="password" value={user.password} placeholder="Create Password" />
           <input type="submit" onClick={(e)=>{
            e.preventDefault();
            CheckAndSaveDetails();
           }} value="Submit" />
           </form>
        </div>
    )
}