import React, {useState, useEffect} from 'react';
//import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import './Login.css';


function Login() {

    return (

        <div>
            <form action={'http://localhost:4000/login'} method={'post'}>
                <input type="text" name="username" placeholder="Enter username"/><br/>
                <input type="text" name="password" placeholder="Enter the password"/><br/>
                <button>Click here</button>
            </form>
        </div>


    );

}

export default Login;
