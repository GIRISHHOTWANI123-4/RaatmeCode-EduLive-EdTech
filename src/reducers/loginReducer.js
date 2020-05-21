import React from "react";
import Login from "../Login";
const loginReducer=(state=null,action)=>{
           switch(action.type)
           {
               case "LOGIN":
                    return <Login/>;
               default:
                    return state;
           }


}

export default loginReducer;