import { Fragment, useState } from "react";

export default function Todo({ item ,onUpdate,onDelete}) {
  //Pongo el nombre con que pasaron la propiedad en este caso es Item
  const [edit, setEdit] = useState(false);
  function FormEdit() {
    
    const [newValue,setNewValue]=useState(item.title)
    function handleSubmit(e){
      e.preventDefault();
    }
    function handleChange(e){
      const value=e.target.value;
      setNewValue(value)
    }
    function handleUpdateTodo(){
      onUpdate(item.id,newValue)
      setEdit(false)

    }
    return (
      <form className="todoUpdate" onSubmit={handleSubmit}>
        <input type="text" className="todoInput" onChange={handleChange} value={newValue}/>
        <button className="buttonUpdate" onClick={handleUpdateTodo}>Update</button>
      </form>
    );
  }
  function TodoElement() {
    return (
      <div className="todoInfo">
        <h1>{item.title}</h1>
        <button onClick={() => setEdit(true)}>Edit</button>
        <button onClick={(e)=>onDelete()}>Delete</button>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="todo">{edit ? <FormEdit /> : <TodoElement />}</div>
      {/* Operador Ternario es decir si el state Edit es edit (es decir que el valor sea igual que el mismo), 
          muestra form edit de lo contrario todoElement */}
    </Fragment>
  );
}
