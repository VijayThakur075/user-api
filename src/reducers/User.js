import {GET_USER} from "../action";

const intialState={
    user:[]
}

const users=(state =intialState,action)=>{
    switch(action.type){
        case GET_USER:{
            return{
                ...state,
                user: action.payload,
            };
        }
        default : 
            return state;
    }
}
export default users;