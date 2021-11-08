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
            <p>{todo.map(todos=>
                (<div key={todos.id}>{todos.title}</div>))}</p>
        </div>
    )
}