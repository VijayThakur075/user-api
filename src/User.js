import axios from "axios";
import React ,{ useEffect } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "./action/index.js";

export default function User (props){
    //const[Post, setPost] = useState([]);
    const users = useSelector((state) => state.users.user);
    const dispatch = useDispatch();
   
    useEffect(() =>{
        axios.get("http://localhost:3008/users")
        .then((response) => {
         dispatch(getUser(response.data));
         
        });     
    }, []);

    if(!users)return null;

    return(
        <>
          <div>
              <ul>
                  <h3>ID</h3>
                  {users.map(post => (
                      <li key={post.id}>
                          <li>{post.id}</li>
                          <li>{post.name}</li>
                          <li>{post.username}</li>
                          <li>{post.email}</li>
                          <Link className = "btn btn-primary" to={`/Posts/${post.id}`}>post </Link>
                          <Link className = "btn btn-primary" to={`/Todo/${post.id}`} >todo</Link>
                          <Link className = "btn btn-primary" to={`/EditUser/${post.id}`}>edit</Link>
                         
                      </li>
                  ))}
                </ul>
          </div>
        </>
    )
}

