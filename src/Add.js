import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add =() =>{
    const navigate = useNavigate();
    const [user, setUser] = useState({
        id:"",
        username:"",
        email:""
    });

const{id, username, email}= user;
const handle = e =>{
    setUser({...user, [e.target.name]: e.target.value});
};

const onSubmit = async(e)=>{
    e.preventDefault();
    await axios.post(`http://localhost:3008/users`,user)
    navigate('/User');
};

return(
    <div className="wrapper">
        <form onSubmit={(e)=>onSubmit(e)}>
            <div className="form-group">
                <label>Enter Id</label>
                <input onChange={(e)=>handle(e)} id="id" value={id} type="text" name="id" className="form-control" />
            </div>
        </form>

    </div>
)
}

export default Add;