import React from 'react';
import './teacher.css'
import QuestionPaper from "./QuestionPaper";
// noinspection ES6CheckImport,ES6CheckImport
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import App from "./App";

function Teacher() {
    return (
        <Router>
            <Switch>
                <Route exact path='/questionpaper' component={QuestionPaper}/>
                <Route exact path={'/'} component={App}/>
                <div className={"main"}>
                    <h1 className="h">Welcome To EdTech Classroom</h1>
                    <div >

                        <div className={"innerdiv"}>


                            {/*<Link to={"/"}>*/}
                            {/*    <button className="live">LOG OUT</button>*/}
                            {/*</Link>*/}
                            <button className={"live"}>Start Live Stream</button>
                            <div className={"divider"}></div>
                            <button className={"live"}>Start Quiz</button>
                            <div className={"divider"}></div>
                            <Link to={'/questionpaper'}>
                                <button className={"live"}>Prepare Quiz</button>
                            </Link>
                        </div>


                    </div>
                </div>
            </Switch>
        </Router>
    );
}

export default Teacher;