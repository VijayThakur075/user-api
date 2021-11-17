import axios from "axios";
import React ,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function User (props){
    const[Post, setPost] = useState([]);
    
   
    useEffect(() =>{
        axios.get("http://localhost:3008/users")
        .then((response) => {
         setPost(response.data);
         setPost(response.data.reverse())
        });     
    }, []);

    if(!Post)return null;

    return(
        <>
          <div>
              <ul>
                  <h3>ID</h3>
                  {Post.map(post => (
                      <li key={post.id}>
                          <li>{post.id}</li>
                          <li>{post.name}</li>
                          <li>{post.username}</li>
                          <li>{post.email}</li>
                          <Link className = "btn btn-primary" to={`/Post/${post.id}`}>post </Link>
                          <Link className = "btn btn-primary" to={`/Todo/${post.id}`} >todo</Link>
                          <Link className = "btn btn-primary" to={`/EditUser/${post.id}`}>edit</Link>
                         
                      </li>
                  ))}
                </ul>
          </div>
        </>
    )
}

