import React from 'react';
import {Link, BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Button} from 'reactstrap';
import Footer from './Footer';
import AnswerSheet from "./Answersheet";
// import './Student.css';
import App from "./App";
import Score from "./Score";
import {useDispatch} from "react-redux";
import login from "./actions/login";

/*
function Info() {
    var a = prompt("Enter the Secret code");
    alert(a);
}
*/

function Student() {
    const dispatch=useDispatch();
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
                        <Button id={"bt2"} onClick={()=>dispatch(login())}>
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
