//import axios from "axios";
//import {getUser} from "./action/index.js";
import React ,{ useEffect } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { requestUser } from "./Thunks/user.js";

export default function User (props){
    //const[Post, setPost] = useState([]);
    const {user} = useSelector((state) => state.users);
    const dispatch = useDispatch();
   
    useEffect(() =>{
        /*axios.get("http://localhost:3008/users")
        .then((response) => {
         dispatch(getUser(response.data));*/
        
    dispatch(requestUser(user));
         
            
    }, [user, dispatch]);

    if(!user)return null;
    


    return(
        <>
          <div>
              <ul>
                  <h3>ID</h3>
                  {user.map(post => (
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

