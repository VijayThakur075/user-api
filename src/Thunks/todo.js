import axios from "axios";
import { getTodo } from "../action";

const client=axios.create({
    baseURL: 'http://localhost:3008',

})

export  const requestUser = (id) => async (dispatch) => {
    try {
      const response = await client.get(`/users/${id}/todos`);
      dispatch(getTodo(response.data));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }