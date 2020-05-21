import React from "react";
import './SignUp.css'
function SignUpPage() {

    return(
        <div className="out">
            <div className="sign">
                <h1 className="text">Sign Up</h1>
                <form action={"http://localhost:4000/signup"} method={"post"}>
                    <input  className="textarea" name={"name"} placeholder={"Enter name"}/><br/>
                    <input name={"username"} placeholder={"Enter username"} className="textarea"/><br/>
                    <input name={"password"} placeholder={"Enter password"} className="textarea"/><br/>
                    <input name={"email"} placeholder={"Enter email"} className="textarea"/><br/>
                    <input name={"institute"} placeholder={"Enter institute"} className="textarea"/><br/>
                    <input name={"role"} placeholder={"Enter role"} className="textarea"/><br/>
                    <button className="btn" type={"submit"}>Click</button><br/>
                </form>
            </div>
        </div>
    );

}


export default SignUpPage;