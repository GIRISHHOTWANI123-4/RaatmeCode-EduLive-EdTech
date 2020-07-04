import React from 'react';
//import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import './Login.css';
import {useDispatch} from "react-redux";
import studSignupAction from "./actions/StudentSignUP_action";
import * as axios from "axios";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import StudentSignupReducer from './reducers'
import SignUpPage from "./SignUpPage";
import Teacher from "./Teacher";
import Student from "./Student";
import {Button} from "reactstrap";




function Login() {
    const dispatch = useDispatch();


    const LoginHandler = async (props)=> {

        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let data = "";
        console.log(username);
        await axios.post('http://localhost:4000/login', {
            username: username,
            password: password,

        }).then(res => {
            data = res.data;

        });
        console.log(data);
        dispatch(studSignupAction({type: "login", username: username, role: data}));

    }
        // return (

        //
        //
        //             <div style={{marginTop: '10%'}}>
        //                 <Link to={'/teacher'}><button className='bt'>Teacher</button></Link>
        //                 <Link to={'/student'}><button className='bt'>Student</button></Link>
        //             </div>
        //         </Switch>
        //     </Router>
        //
        // );



    return (
    <Router>
                <Switch>
                    <Route exact path='/teacher' component={Teacher}/>
                    <Route exact path='/student' component={Student}/>
        <div className="container">

            <div className="login" >
                <h1 className="text">Login</h1>

                    <input id={"username"} type="text" name="username" placeholder="Enter username" className="textarea"/><br/>
                    <input id={"password"} type="text" name="password" placeholder="Enter the password"className="textarea"/><br/>
                    <Link><button className="btn" onClick={LoginHandler}>Login</button></Link>

                <Link to={'/teacher'}><button className='bt'>Teacher</button></Link>
                <Link to={'/student'}><button className='bt'>Student</button></Link>

            </div>
        </div>
                </Switch>
        </Router>




    );

}

export default Login;