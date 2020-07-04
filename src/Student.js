import React from 'react';
import {Link, BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Button} from 'reactstrap';
import Footer from './Footer';
import AnswerSheet from "./Answersheet";
// import './Student.css';
import App from "./App";
import Score from "./Score";
import {useDispatch,useSelector} from "react-redux";
import * as axios from 'axios';
import login from "./actions/login";
import studSignupAction from "./actions/StudentSignUP_action";


/*
function Info() {
    var a = prompt("Enter the Secret code");
    alert(a);
}
*/

function Student() {
    const dispatch=useDispatch();


    let val = useSelector(state => state.StudReducer);

    //console.log(val.username);

    function JoinClass(){
        let element = document.createElement("input");
        element.setAttribute("type", "text");
        element.setAttribute("id", "code");
        element.setAttribute("value", "");
        element.setAttribute("name", "code");
        element.setAttribute("style", "width:200px");


        let button = document.createElement("button");
        button.setAttribute("id", "joinClass");
        button.setAttribute("value", "Join Class");
        button.setAttribute("name", "joinClass");
        button.setAttribute("style", "width:100px");
        button.setAttribute("style", "height:30px");
        button.setAttribute("className","joinClas");
        button.innerText="Join Class";
        // button.setAttribute("onclick","joinClass()");
        button.onclick = joinClass;

        function joinClass(){
            console.log("JoinClass button clicked");
            let code = document.getElementById("code").value;
            console.log(code);

            let StudentCourseObj = {
                username:val.username,
                CourseCode:code
            };

            axios.post('http://localhost:4000/joinclass' ,StudentCourseObj).then(res=> {
                console.log("data =",res.data)});

        }



        document.body.appendChild(element);
        document.body.appendChild(button);
    }

    return (
        <Router>
            <Switch>
                <Route exact path='/answersheet' component={AnswerSheet} />
                <Route exact path='/viewresult' component={Score} />
                <Route exact path={'/'} component={App}/>
                <div className={"back"}>


                        <h1>Welcome To EdTech Classroom</h1>
                        <div className={"logout"}>
                            <Link to={"/"}>
                                <button id={"bt3"}>LOG OUT</button>
                            </Link>

                        </div>

                    <div className="Button">
                        <Button id={"bt2"} onClick={JoinClass}>
                           Join Class</Button>
                        {/*<div className={"divider"}/>*/}
                        <Link to={{pathname:'/answersheet'}}><Button id={"bt1"} >Start Quiz</Button></Link>
                        {/*<div className={"divider"}/>*/}
                        <Link to={'/viewresult'}><Button id={"bt"}>View Score</Button></Link>
                    </div>

                    <Footer/>

                </div>
            </Switch>
        </Router>


    );
}

export default Student;
