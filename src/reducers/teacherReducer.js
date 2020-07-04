import React from "react";

const teacherReducer=(state  =[{}],action)=>{
    switch (action.type) {
        case 'Teacher':
            return(
                [
                    ...state,
                    {
                        courseName:action.courseName,
                        courseCode:action.courseCode
                    }
                ]
            );
        default:
            return state;
    }

}




export default teacherReducer;