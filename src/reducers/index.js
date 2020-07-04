import counterReducer from "./counter";
import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import clickReducer from "./clickReducer";
import StudReducer from "./StudentSignupReducer";
import teacherReducer from "./teacherReducer";

const allReducers=combineReducers({
    counter:counterReducer,
    login:loginReducer,
    todo:clickReducer,
    StudReducer:StudReducer,
    teacherReducer:teacherReducer
})
export default allReducers;

