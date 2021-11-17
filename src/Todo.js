import React, {useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";

 const Todo=()=>{
    const {id} =useParams();
    const[todo, setTodo]= React.useState([]);

    useEffect(()=>{
      loadUser();
        },[]);

    const loadUser = async ()=>{
        const res = await axios.get(`http://localhost:3008/users/${id}/todos` );
        console.log(res);
        setTodo(res.data)
    }
    

    return(
        <div className = "d-flex flex-row bd-highlight mb-3">
        <div>
            <ul>
            <p>{todo.map(post=>
                (<li key={post.id}>
                   <li>"userId :"{post.userId}</li>
                </li>
                ))}
            </p>
            </ul>
        </div>
           <div>
            <ul>
                <h5 className = "text-danger">Id</h5>
                   {todo.map(post =>(
                       <li key={post.id}>{post.id}</li>
                   ))}
            </ul>
            </div>
            <div>
                <ul>
                    <h5 className="tet-danger">id</h5>
                    {todo.map(post =>(
                        <li key={post.id}>{post.id}</li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    <h5 className ="text-danger">staus</h5>
                    {todo.map(post =>(
                        <li key={post.id}>{post.completed? "completed" : "Not completed"}</li>
                    ))}
                </ul>
            </div>
        </div>
            
    )
}

export default Todo;