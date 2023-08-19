import React from "react"

const details = {
    name:"",
    email:"",
    password:""
}
export const Signup = ()=>{
   const [user,setuser] = React.useState(details);
   const Savechange = (e)=>{
    const {name,value} = e;
    setuser((info)=>(
        {
            ...info,
            [name]:value
    
        }
    ))
   }
    return (
        <div>
           <form onChange={(e)=>Savechange(e.target)} action="Loginform">
           <h1>Signup</h1>
           <label htmlFor="email">Enter Name</label>
           <input type="text" name="name" value={user.name} placeholder="Enter Name" />
           <label htmlFor="email">Enter Email</label>
           <input type="text" name="email" value={user.email} placeholder="Enter Email" />
           <label htmlFor="email">Create Password</label>
           <input type="text" name="password" value={user.password} placeholder="Create Password" />
           <input type="submit" value="Submit" />
           </form>
        </div>
    )
}