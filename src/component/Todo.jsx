import React from "react";
import { useState } from "react";
export const Todo = () =>{
    let [newTodo,setnewTodo] = useState("");
    const [todos, settodos] = useState([]);
    const handleChange = (e)=>{
    setnewTodo(e.target.value);
    
    }
    const onDelete = (id)=>{
   const ltodo = todos.filter((todo)=>{
    return todo.id!==id})
   settodos([...ltodo]);


    }



    return <div>
        <h1>TodoList App</h1>
        <input placeholder = "search here"  value = {newTodo} onChange = {handleChange}></input>
        <button onClick = {()=>{
       
          settodos([...todos,{id:Date.now() ,value:newTodo,isCompleted:false}]);
          setnewTodo("")
        
        }}>Add</button>
        {todos.map((todo)=>{
          return <div key = {todo.id}>{todo.value} <button onClick = {()=> onDelete(todo.id)}>x</button></div>
        })}



    </div>
     
}