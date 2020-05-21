import React from 'react';
//import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import './Login.css';



function Login() {

    return (


        <div className="container">

            <div className="login" >
                <h1 className="text">Login</h1>
                <form action={'http://localhost:4000/login'} method={'post'}>
                    <input type="text" name="username" placeholder="Enter username" className="textarea"/><br/>
                    <input type="text" name="password" placeholder="Enter the password"className="textarea"/><br/>
                    <button className="btn">Login</button>
                </form>
            </div>
        </div>




    );

}

export default Login;