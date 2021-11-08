import axios from "axios";
import React ,{ useState, useEffect } from "react";

export default function User (){
    const[post, setPost] = useState([]);


    useEffect(() =>{
        axios.get("http://localhost:3008/users")
        .then((response) => {
            setPost(response.data);
        });
        
    });

    if(!post)
    return null;

    return(
        <>
          <div>
              <ul>
                  <h3>ID</h3>
                  {post.map(post => (
                      <li key={post.id}>{post.id}</li>
                  ))}
              </ul>
          </div>
        </>
    )
}
