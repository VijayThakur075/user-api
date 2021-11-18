import {GET_TODO} from "../action/index.js";

const intialState={
    todo:[]
}

const todos=(state =intialState,action)=>{
    switch(action.type){
        case GET_TODO:{
            return{
                ...state,
               todo: action.payload,
            };
        }
        default : 
            return state;
    }
}
export default todos;