import { Fragment, useState } from "react";
import { Button,FormControl,TextField,Card,cardActionArea,CardActionArea,Typography} from '@mui/material';
import {Fingerprint,AutoDelete,BrowserUpdated } from '@mui/icons-material';

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

        <FormControl className="todoUpdate" onSubmit={handleSubmit}>
           <TextField className="todoInput" onChange={handleChange} value={newValue} placeholder="Update"></TextField>
        <Button className="buttonUpdate" onClick={handleUpdateTodo}>Update<BrowserUpdated/></Button>
        </FormControl>
       
   
   
    );
  }
  function TodoElement() {
    return (
      <div className="todoInfo">
        <Card id="cardContainer">
          <CardActionArea>
          <Typography gutterBottom variant="h5">
            {item.title}
          </Typography>
            
            <Button onClick={(e) => onDelete()}><AutoDelete /> Delete</Button>
            <Button onClick={(e) => setEdit(true)}>Edit<Fingerprint/></Button>
          </CardActionArea>
        </Card>
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
