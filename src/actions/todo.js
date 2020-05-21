import React from "react";

const todo=(props)=>{
     return{
         type:props.type,
         text:props.text,
         id:props.id
     }
}

export default todo;