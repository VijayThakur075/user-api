import React, { useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

 const Post =()=>{
    const[Num , setNum]= React.useState([]);
    const {id} =useParams();

      useEffect(()=>{
        loadUser();
    }, []);


    const loadUser= async () =>{
        const res = await axios.get(`http://localhost:3008/users/${id}/posts`);
        setNum(res.data)
    }
return(

    <>
       <div className ="d-flex flex-row bd-highlight mb-3">
           <div>
              <ul>
                  <h3 className="text-danger">User id</h3>
                   {Num.map(post => (
                      <li key={post.id}>
                         <li> "userId :"{post.userId}</li>
                         
                      </li>
                  ))}
              </ul>
              </div>
              <div>
                  <ul>
                      <h5 className="text-danger">title</h5>
                      {Num.map(post =>(
                         <li key={post.id}>{post.title} <Link className="btn btn-primary"  to={`/Comment/${post.id}`}>UserComment</Link></li> 
                       ))}
                  </ul>
              </div>
          </div>

    </>
)
}
export default Post;
