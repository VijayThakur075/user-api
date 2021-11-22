import axios from "axios";
import { getEdit, getTodo } from "../action";

const client = axios.create({
    baseURL: 'http://localhost:3008',  
})

export const requestUser=(id)=> async(dispatch) =>{
    try{
       const responce = await client.get( `/users/${id}`)
       dispatch(getEdit(responce.data));
    }
    catch(err){
        console.log(err);
    }
}


export const requestUserPut=(id, editData) => async(dispatch) =>{
    try{
        
        const responce = await client.put( `/users/${id}` , editData)
        dispatch(getEdit(responce.data))
    }
    catch(err){
        console.log(err)
    }
}