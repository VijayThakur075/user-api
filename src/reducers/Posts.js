import {GET_POST} from "../action";

const intialState={
    post:[]
}

const posts=(state =intialState,action)=>{
    switch(action.type){
        case GET_POST:{
            return{
                ...state,
               post: action.payload,
            };
        }
        default : 
            return state;
    }
}
export default posts;