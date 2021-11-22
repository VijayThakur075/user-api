import axios from "axios";
import { getUser } from "../action";

const client = axios.create({
    baseURL: 'http://localhost:3008',
  });

  export  const requestUser = () => async (dispatch) => {
    try {
      const response = await client.get('/users');
      dispatch(getUser(response.data));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }
  