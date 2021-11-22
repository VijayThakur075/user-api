import React, {useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { requestUser } from "./Thunks/comment";
//import { getComment } from "./action";
//import axios from "axios";


const Comments= () =>{
    const {id}=useParams();
   // const[cmt, setCmt]=useState([]);
   const {comment} = useSelector((state) => state.comments);
   const dispatch = useDispatch();

    useEffect(() => {
            dispatch(requestUser(id))
        //loadUser();
        }, [])

    // const loadUser= async () =>{
    //     const res = await axios.get(`http://localhost:3008/posts/${id}/comments`);
    //     dispatch(getComment(res.data))
    //}

    return(
        <>
        <div>
          <ul>
              <h5 className="text-danger">postId</h5>
              {comment.map(post => (
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