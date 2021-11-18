import {GET_COMMENT} from "../action";

const intialState={
    comment:[]
}

const comments=(state =intialState,action)=>{
    switch(action.type){
        case GET_COMMENT:{
            return{
                ...state,
               comment: action.payload,
            };
        }
        default : 
            return state;
    }
}
export default comments;