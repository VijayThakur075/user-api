import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router";
import Button from "@restart/ui/esm/Button";

export default function Post (){
    const[num , setNum]= useState([]);
    const {id} =useParams();
    const navigate = useNavigate();
            useEffect(()=>{
            axios.get("http://localhost:3008/posts").then((response) =>{
            setNum(response.data);
        });
    })

    const userCmt =()=>{
            navigate(`/posts/${id}/comments`);
    }
return(

    <>
       <div>
              <ul>
                  <h3>Posts</h3>
                    <div>{num.map(posts => (
                      <li key={posts.id}>
                         <li> "userId :"{posts.userId}</li>
                         <li> "title :"{posts.title}</li>
                         <li> "body :"{posts.body}</li>
                         <Button onClick={() => userCmt(posts.id)}>comment</Button>
                      </li>
                  ))}</div>
              </ul>
          </div>
    </>
)
}
