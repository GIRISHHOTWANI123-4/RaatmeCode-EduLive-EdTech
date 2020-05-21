import React from "react";

const clickReducer=(state=[],action)=>{

    switch (action.type) {
        case 'TODO':
            return [...state,
                {
                id:action.id,
                text:action.text,
                completed:false
            }];
        default:
            return state;
    }
}
export default clickReducer;