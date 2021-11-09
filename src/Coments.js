import React, { useEffect, useState } from "react";
import axios from "axios";

const Coments= () =>{
    const[cmt, setCmt]=useState([]);

    useEffect(() => {
        
            axios.get('http://localhost:3008/comments')
            .then((response) =>{
            setCmt(response.data);
        })
        
    });

    return(
        <>
       
            <h3>comments</h3>
            <div>
                <ul>{cmt.map(comments => (
                      <li key={comments.id}>
                          <li> "postId"  {comments.postId}</li>
                          <li> "name"  {comments.name}</li>
                          <li> "email"  {comments.email}</li>
                          <li> "body"  {comments.body}</li>
                        
                      </li>
                  ))}
                 </ul>
            </div>
        
        </>
    )

}
export default Coments;