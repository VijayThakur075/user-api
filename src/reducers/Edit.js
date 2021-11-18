import {GET_EDIT} from "../action";

const intialState={
    editUser:{
        userId:"",
        username:"",
        email:"",
    }
}

const edit=(state =intialState,action)=>{
    switch(action.type){
        case GET_EDIT:{
            return{
                ...state,
               editUser: action.payload,
            };
        }
        default : 
            return state;
    }
}
export default edit;