

export const Login = ()=>{

    return (
        <div>
           <form action="Loginform">
           <h1>Login</h1> 
           <label htmlFor="email">Enter Email</label>
           <input type="text" placeholder="Enter Email" />
           <label htmlFor="email">Enter Password</label>
           <input type="text" placeholder="Enter Password" />
           <input type="submit" value="Submit" />
           </form>
        </div>
    )
}