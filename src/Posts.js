import React, {useEffect} from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { requestUser } from "./Thunks/post";
//import { getPost } from "./action/index.js";
//import axios from "axios";


 const Post =(props)=>{
    //const[Num , setNum]= useState([]);
    const {id} =useParams();
    const post = useSelector((state) => state.posts.post);
    const dispatch = useDispatch();


      useEffect(()=>{
        dispatch(requestUser(id))
        //loadUser();
    }, []);

    

    // const loadUser= async () =>{
    //     await axios.get(`http://localhost:3008/users/${id}/posts`).then((response)=>{
    //        dispatch(getPost(response.data))
    //     });
        
    // }
return(

    <>
       <div className ="d-flex flex-row bd-highlight mb-3">
           <div>
              <ul>
                  <h3 className="text-danger">User id</h3>
                   {post.map((post => (
                      <li key={post.id}>
                         <li> "userId :"{post.userId}</li>
                      </li>
                  )))}
              </ul>
              </div>
              
              <div>
                  <ul>
                      <h5 className="text-danger">title</h5>
                      {post.map(post =>(
                         <li key={post.id}>{post.title} <Link className="btn btn-primary"  to={`/Comment/${post.id}`}>UserComment</Link></li> 
                       ))}
                  </ul>
              </div>
          </div>

    </>
)
}
export default Post;
