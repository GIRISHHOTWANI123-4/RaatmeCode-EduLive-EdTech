import React, {useState} from "react";
import './SignUp.css'
import * as axios from 'axios'
import SignupAction from './actions/StudentSignUP_action'
import {useDispatch} from "react-redux";
// import Student from "./Student";
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function SignUpPage() {

    const dispatch = useDispatch();
    const [statusText, setStatusText] = useState("");

    const submitDetails = (props)=> {
        console.log("SubmitDetails");
        let name = document.getElementById('name').value;
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let email = document.getElementById('email').value;
        let role = document.getElementById('role').value;
        let institute = document.getElementById('institute').value;
        console.log(role);
        dispatch(SignupAction({type:"signup",username:username,role:role}));

        axios.post('http://localhost:4000/signup', {
            name: name,
            username: username,
            password: password,
            email: email,
            role:role,
            institute:institute
        }).then(res =>{
            if(res.data.role === 'Student'){
                //redirect to student page here............................
                console.log("Stud");
            }
            else console.log("teacher");

        });
    }

    return(
        <div className="out">
            <div className="sign">
                <h1 className="text">Sign Up</h1>

                    <input  className="textarea" name={"name"} placeholder={"Enter name"} id={'name'}/><br/>
                    <input name={"username"} placeholder={"Enter username"} className="textarea" id={'username'}/><br/>
                    <input name={"password"} placeholder={"Enter password"} className="textarea" id={'password'}/><br/>
                    <input name={"email"} placeholder={"Enter email"} className="textarea" id={'email'}/><br/>
                    <input name={"institute"} placeholder={"Enter institute"} className="textarea" id={'institute'}/><br/>
                    <input name={"role"} placeholder={"Enter role"} className="textarea" id={'role'}/><br/>
                    <button className="btn" onClick={submitDetails}>Click</button><br/>

            </div>
        </div>
    );

}


export default SignUpPage;