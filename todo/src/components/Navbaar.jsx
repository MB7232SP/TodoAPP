import '../CSS/Navbaar.css'
import { Link } from 'react-router-dom'
export const Navbaar = ()=>{

    return (<div id="navbaar">
        <div>
        <Link to={"/login"}><h3>Login</h3></Link>
        <Link to={'/signup'}><h3>Signup</h3></Link>
        
        <Link to={'alltodos'}><h3>My Todos</h3></Link>
        </div>
        <div>
        <h1>TODO APP</h1>

        </div>
        <div>
            <Link to={'/login'}><h3>Logout</h3></Link>
        </div>
    </div>)
}