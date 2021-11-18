import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { getAdd } from "./action";

const Add =(props) =>{
    const navigate = useNavigate();
   /* const [user, setUser] = useState({
        id:"",
        username:"",
        email:""
    });*/
    
const addData = useSelector((state) => state.add.addUser);
const dispatch = useDispatch();
const{id, username, email}= addData;

const handle = e =>{
   dispatch(getAdd({...addData,[e.target.name]: e.target.value}));
};


const onSubmit = async(e)=>{
    e.preventDefault();
   const res= await axios.post(`http://localhost:3008/users`,addData)
     dispatch(getAdd(res.data))
    navigate('/User');

};

return(
    <div className="wrapper">
        <form onSubmit={(e)=>onSubmit(e)}>
            <div className="form-group">
                <label>Enter Id</label>
                <input onChange={(e)=>handle(e)} id="id" value={id.addData} type="text" name="id" className="form-control" />
                <label>Enter username</label>
                <input onChange={(e)=>handle(e)} id="id" value={username.addData} type="text" name="username" className="form-control" />
                <label>Enter email</label>
                <input onChange={(e)=>handle(e)} id="id" value={email.addData} type="text" name="email" className="form-control" />
                <input type="submit" onSubmit={(e)=>onSubmit()} className="btn btn-success btn-block"/>
            </div>
        </form>

    </div>
)
}

export default Add;