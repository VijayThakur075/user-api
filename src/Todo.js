import React, {useEffect} from "react";
import { useParams } from "react-router";
import {useSelector, useDispatch} from "react-redux"
import { requestUser } from "./Thunks/todo";
//import {getTodo} from "./action";
//import axios from "axios";


 const Todo=()=>{
    const {id} =useParams();
    //const[todo, setTodo]= React.useState([]);
    const todos = useSelector((state) => state.todos.todo);
    const dispatch = useDispatch();

    useEffect(()=>{
     // loadUser();
        dispatch(requestUser(id))
        },[]);

    // const loadUser = async ()=>{
    //     const res = await axios.get(`http://localhost:3008/users/${id}/todos` );
    //     console.log(res);
    //     dispatch(getTodo(res.data))
    // }
    

    return(
        <div className = "d-flex flex-row bd-highlight mb-3">
        <div>
            <ul>
            <p>{todos.map(post=>
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
                   {todos.map(post =>(
                       <li key={post.id}>{post.id}</li>
                   ))}
            </ul>
            </div>
            <div>
                <ul>
                    <h5 className="tet-danger">id</h5>
                    {todos.map(post =>(
                        <li key={post.id}>{post.id}</li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    <h5 className ="text-danger">staus</h5>
                    {todos.map(post =>(
                        <li key={post.id}>{post.completed? "completed" : "Not completed"}</li>
                    ))}
                </ul>
            </div>
        </div>
            
    )
}

export default Todo;