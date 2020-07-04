import React from "react";

const login=(props)=>{
    return{
        type:"LOGIN",
        username:props.username,
        role:props.role
    }
}

export default login;