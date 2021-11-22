import {GET_EDIT, GET_MODEL} from "../action";

const intialState={
    editUser:{
        userId:"",
        username:"",
        email:"",
    },
    //show: 'false',
}

const edit=(state =intialState,action)=>{
    switch(action.type){
        case GET_EDIT:
            return{
                ...state,
               editUser: action.payload,
            };
        
            case GET_MODEL:
                return{
                    ...state,
                    show: action.payload,
                }
            
        
        default : 
            return state;
    }
}
export default edit;