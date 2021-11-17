import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Comments= () =>{
    const {id}=useParams();
    const[cmt, setCmt]= React.useState([]);

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
        <div>
          <ul>
              <h5 className="text-danger">postId</h5>
              {cmt.map(post => (
                      <li key={post.id}>
                          <li> "postId"  {post.postId}</li>
                      </li>
                  ))}
                 </ul>
       </div>
        <div>
           <ul>
               <h5 className="text-danger">id</h5>
               {cmt.map(post => (
                      <li key={post.id}>
                          <li> "postId"  {post.Id}</li>
                      </li>
                  ))}
           </ul>
         </div>
         <div>
           <ul>
               <h5 className="text-danger">name</h5>
               {cmt.map(post => (
                      <li key={post.id}>
                          <li> "postId"  {post.name}</li>
                      </li>
                  ))}
           </ul>
         </div>
        </div>
        </>
    )

}
export default Comments;