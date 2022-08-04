import React from 'react'
import delet from "./delete.jpg";
import mark from "./mark.png";
import unmark from "./unmark.png";
import "./table.css";

const  TodoList =({todo, dispatch})  =>{
  return (
    <div className='container'>
      
    
          
       <input type="checkbox" id="checkBox1" checked={todo.check ? "" : "checked"  } ></input> 
       
       <p  style={{color:todo.color ? "red" : "green"}}> {todo.inputValue} </p>
 
      <label  onClick={() => dispatch({ type: "mark_Todo", payload: { id: todo.id } })}><img src={mark} width="40px"  height="40px"/></label>
   
      <label   onClick={() => dispatch({ type: "mark_UnTodo", payload: { id: todo.id } })}><img src={unmark} width="40px"  height="40px"/></label>
         
           <label  onClick={() => dispatch({ type: "Delete_Todo", payload: { id: todo.id } })}><img src={delet} width="40px"  height="40px"/></label>
 <hr/>
    </div>
    
  )
}

export default TodoList





   