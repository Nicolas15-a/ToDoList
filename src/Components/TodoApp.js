import React, { Fragment, useState } from "react";
import Todo from "./Todo";
export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos,setTodos]=useState(
      []
  )


  const handleClick = (e) => {
    e.preventDefault();
    setTitle("new value");
  };
  const handleState = (e) => {
    const value = e.target.value;
    setTitle(value);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(), //this is for random ID
      title: title,
      completed: false,
    };
    const temp=[...todos];
    temp.unshift(newTodo);
    setTodos(temp);
    setTitle("")
    
  }
  function handleUpdate(id,value){
    const temp=[...todos];
    const item=temp.find(item=>item.id==id);
    item.title=value;
    setTodos(temp)
  }
  function handleDelete(id){
    const temp1=[...todos]
    const temp=temp1.shift(item=>item.id==id);
    setTodos(temp1)
  }
  return (
    <Fragment>
      <h1>This is a TodoList</h1>
      <form className="containerForm" onSubmit={handleSubmit}>
        <input
          onChange={handleState}
          className="todoItem"
          value={title}
        ></input>
        <input
          onClick={handleSubmit}
          className="buttonCreate"
          type="submit"
          value="createButton"
        ></input>
        
        <div>
            <ol>
              {todos.map((item)=>(
                <Todo key={item.id}  item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
              ))

              }
            </ol>
        </div>
        
      </form>
    </Fragment>
  );
}
