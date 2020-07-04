import React from "react";
// import Student from '../Student'
import Teacher from "../Teacher";


const SignUpReducer=(state= {},action)=>{
    switch(action.type)
    {
        case "login": {

            return ({
                username: action.username,
                role: action.role

            });
            console.log(action.username);

        }

        default:
            return state;
    }


}

export default SignUpReducer;