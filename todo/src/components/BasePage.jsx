import { Googlelogin } from "./GoogleLogin"



export const Basepage = ()=>{
    return (
        <div style={{display:"flex",alignItems:"center", justifyContent:"center", height:"100vh"}}>
          <Googlelogin/>
          <h2>  Hello Loding Todos App ...</h2>
        </div>
    )
}