import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Todo(){
    const[todo, setTodo]= useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3008/todos").then((response) =>{
            setTodo(response.data);
        });
    })

    return(
        <div>
            <ul>
            <p>{todo.map(todos=>
                (<li key={todos.id}>
                   <li>"userId :"{todos.userId}</li> 
                   <li>"id :"{todos.id}</li>
                   <li>"title :"{todos.title}</li>
                   <li>"completed :"{todos.completed}</li>
                </li>
                ))}
            </p>
            </ul>
        </div>
    )
}