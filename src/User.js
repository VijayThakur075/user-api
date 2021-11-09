import axios from "axios";
import React ,{ useState, useEffect } from "react";
import Button from "@restart/ui/esm/Button";
import { useNavigate } from "react-router";



export default function User (){
    const[post, setPost] = useState([]);
    let navigate = useNavigate();


    useEffect(() =>{
        axios.get("http://localhost:3008/users")
        .then((response) => {
         setPost(response.data);
        });     
    });

     function Todo(event) {
        navigate(`/users/${event}/todos`);
    }

    function Posts(event) {
        navigate(`/users/${event}/todos`)
    }


    function handleChangeName(event) {
        const { name, value } = event.target;
        const nextUser = { ...post, [name]: value };
        setPost(nextUser);
    }

    if(!post)
    return null;

    return(
        <>
          <div>
              <ul>
                  <h3>ID</h3>
                  {post.map(data => (
                      <li key={data.id}>
                          <li>{data.id}</li>
                          <li>{data.name}</li>
                          <li>{data.username}</li>
                          <li>{data.email}</li>
                          <Button variant="primary"  onClick={() =>Todo(data.id)}>todo </Button>
                          <Button variant="primary" onClick={() =>Posts(data.id)} >post</Button>
                          <Button variant="primary"
                           value={post.name}
                           onChange={handleChangeName}
                           name="name">edit</Button>
                      </li>
                  ))}
              </ul>
          </div>
        </>
    )
}

