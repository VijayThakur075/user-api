import axios from "axios";
import { getAdd } from "../action";

const client = axios.create({
    baseURL: 'http://localhost:3008',  
})

export  const requestUser = (addData) => async (dispatch) => {
    try{
        const res= await  client.post(`users`,addData)

        console.log(res.data)
        dispatch(getAdd(res.data))
    }
    catch(err){
        console.log(err)
    }
}

