import React, { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Comments= () =>{
    const {id}=useParams();
    const[cmt, setCmt]=useState([]);

    useEffect(() => {
        loadUser();
        }, [])

    const loadUser= async () =>{
        const res = await axios.get(`http://localhost:3008/posts/${id}/comments`);
        setCmt(res.data)
    }

    return(
        <>
        <div>
          <ul>
              <h5 className="text-danger">postId</h5>
              {cmt.map(post => (
                      <li key={post.id}>
                          <li> {post.Id}</li>
                          <li> {post.email}</li>
                      </li> 
                 ) )}
                 </ul>
       </div>
        </>
    )

}
export default Comments;