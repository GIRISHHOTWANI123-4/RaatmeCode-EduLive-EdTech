import React, {useEffect, useState} from 'react';
import './teacher.css'
import QuestionPaper from "./QuestionPaper";
// import liveStream from "./liveStream";
// noinspection ES6CheckImport,ES6CheckImport
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import App from "./App";
import {useDispatch, useSelector} from "react-redux";
import * as axios from "axios";
import coursesTeacher from "./actions/coursesTeacher";
import {Card, CardBody, CardTitle, CardText} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Redirect from "react-router-dom/es/Redirect";
import {render} from "react-dom";
import liveStream from "./liveStream";

function Teacher(props) {
    const dispatch=useDispatch();
    const loginState=useSelector(store=>store.StudReducer);

    // const [courses,setCourses]=useState([{}]);
    let courses;
    const username=loginState.username;
    console.log("UserName " + username);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect( async () => {
        // console.log('here');
        // console.log(username);

        console.log("fetch Data called");
        let uri = 'http://localhost:4000/teachers/' + username;
         console.log(uri);

        await axios.get(uri).then( res =>{courses=(res.data)} );
        console.log(courses);
        courses.map((props)=>{

            dispatch(coursesTeacher({courseName:props.courseName,courseCode:props.courseCode}));

        });


        // fetchData();
    }, []);

    const variable=useSelector(state => state.teacherReducer);
    const createClass= ()=>{
        const newElement=document.createElement('input');
        newElement.setAttribute("id","input");
        newElement.setAttribute("style", "width:200px");
        newElement.setAttribute("placeholder","Enter Course Name");
        let innerDiv=document.getElementById('inner');
        innerDiv.appendChild(newElement);

    }
    const getCode=()=>{
        // console.log('in getCode function');
        let courseName=(document.getElementById('input').value);
        const newElement=document.getElementById("input");
        newElement.remove();

        axios.post('http://localhost:4000/courses',{
            username:loginState.username,
            courseName:courseName
        }).then(res=>console.log(res.data))
    }


    return (
        <Router>
            <Switch>
                <Route exact path={'/questionpaper'} component={QuestionPaper}/>
                <Route exact path={'/'} component={App}/>
                <Route exact path={'/liveStream'} component={liveStream}/>
                <div className={"teacherPage"}>
                    <h1 className="h">Welcome To EdTech Classroom</h1>

                        <div className={"innerdiv"} id={'inner'}>
                            {console.log('inside return')}

                            {/*<Link to={"/"}>*/}
                            {/*    <button className="live">LOG OUT</button>*/}
                            {/*</Link>*/}
                            {/*<button className={"live"}>Start Live Stream</button>*/}
                            {/*<div className={"divider"}></div>*/}
                            {/*<button className={"live"}>Start Quiz</button>*/}
                            {/*<div className={"divider"}></div>*/}

                            {/*<button className={"live"}>Prepare Quiz</button>*/}
                            {/*</Link>*/}
                            <div>
                                <button className={"but"} onClick={createClass} > Create Class </button>
                                <button className={"but"} onClick={getCode} >Done</button>
                            </div>
                        </div>
                            <div className={"options"}>
                                {variable.map((props)=>{
                                    return (
                                        <CardBody className={"card"}>
                                            <CardText> Course Name : {props.courseName}</CardText>
                                            <CardText> Course Code : {props.courseCode} </CardText>
                                            <Link to={'/questionpaper'}><button className={"cardButton"}>Prepare Quiz</button></Link>
                                            <button className={"cardButton"}>Start Quiz</button>
                                            {/*<button className={"cardButton"} onClick={liveStream}>Start Live Stream</button>*/}

                                            <Link to={'./liveStream'}><button className={"cardButton"}>Start Live Stream</button></Link>
                                        </CardBody>
                                    )
                                })}
                            </div>









                </div>
            </Switch>
        </Router>
    );
}

export default Teacher;