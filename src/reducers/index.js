import counterReducer from "./counter";
import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import clickReducer from "./clickReducer";
const allReducers=combineReducers({
    counter:counterReducer,
    login:loginReducer,
    todo:clickReducer
})
export default allReducers;

