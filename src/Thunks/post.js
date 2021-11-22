import axios from "axios";
import { getPost } from "../action";

// const client= axios.create({
//     baseURL: 'http://localhost:3008'
// })
export const requestUser= (id) =>async(dispatch)=>{
    try{
        axios.get(`http://localhost:3008/users/${id}/posts`).then((response)=>{
        dispatch(getPost(response.data))
    })
}   
    catch(err){
               console.log(err)
    }
}