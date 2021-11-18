import {GET_ADD} from "../action";

const intialState={
    addUser:{
        id:"",
        username:"",
        email:""
    }
}

const add=(state =intialState,action)=>{
    switch(action.type){
        case GET_ADD:{
            return{
                ...state,
               addUser: action.payload,
            };
        }
        default : 
            return state;
    }
}
export default add;