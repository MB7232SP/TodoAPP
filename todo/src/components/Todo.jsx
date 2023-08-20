


export const CreateTodo = ({prop})=>{
    const {setTodo,SaveTodo} = prop;
  const setName = (value)=>{
      setTodo(pre=>({
        ...pre,
        name:value
      }))
  }
    return (<div id="createTodo">
        <div id="loginSignup">
            <form action="">
                <input onChange={(e)=>{
                    setName(e.target.value);
                }} type="text" placeholder="TodoName" value={prop.todo.name} />
                <button onClick={(e)=>{
                    e.preventDefault();
                    SaveTodo();
                }}>Save</button>
            </form>
        </div>
    </div>)
}