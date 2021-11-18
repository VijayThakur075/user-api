import React, {useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getComment } from "./action";
import { useSelector, useDispatch } from "react-redux";

const Comments= () =>{
    const {id}=useParams();
   // const[cmt, setCmt]=useState([]);
   const comments = useSelector((state) => state.comments.comment);
   const dispatch = useDispatch();

    useEffect(() => {
        loadUser();
        }, [])

    const loadUser= async () =>{
        const res = await axios.get(`http://localhost:3008/posts/${id}/comments`);
        dispatch(getComment(res.data))
    }

    return(
        <>
        <div>
          <ul>
              <h5 className="text-danger">postId</h5>
              {comments.map(post => (
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