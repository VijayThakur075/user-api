import axios from "axios";
import { getComment } from "../action";

const client= axios.create({
    baseURL: 'http://localhost:3008',
})

export const requestUser =(id) =>async(dispatch)=>{
    try{
        const response= await client.get(`/posts/${id}/comments`)
            dispatch(getComment(response.data))
    }
    catch(err){
        console.log(err);
    }

}