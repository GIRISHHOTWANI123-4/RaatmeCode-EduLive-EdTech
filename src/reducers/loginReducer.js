import React from "react";
import Login from "../Login";
const loginReducer=(state={},action)=>{
    switch(action.type){
        case 'LOGIN':
            return({
                username:action.username,
                role:action.role
            });
        default:
            return state;
    }

}

export default loginReducer;
