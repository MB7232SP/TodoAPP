import React from "react";
import { CreateTodo } from "./Todo";
import { Navbaar } from "./Navbaar";
const todoobj  = {
    name:"",
    status:false
}
export const Todoes = ()=>{
   const[todos,setTodoes] = React.useState([]);
   const[todo,setTodo] = React.useState(todoobj);

   React.useEffect(()=>{
     const userData = JSON.parse(localStorage.getItem("userData"))|| [];
     setTodoes(userData.todo)
   },[]);
   const SaveTodo = ()=>{
     if(todo.name===""){
        alert("input is maindatory");

     }else{
        const userData = JSON.parse(localStorage.getItem("userData"))
        userData.todo.push(todo);
        setTodoes(pre=>([...pre,todo]));
        localStorage.setItem("userData",JSON.stringify(userData));
        setTodo(pre=>({
            ...pre,
            name:""
        }));
     }
   }
    return (<div>
        <div>
        <Navbaar/>   
        </div>
     <CreateTodo prop={{todo,setTodo,SaveTodo}}/>
    <div>
     
    </div>
    </div>)
}