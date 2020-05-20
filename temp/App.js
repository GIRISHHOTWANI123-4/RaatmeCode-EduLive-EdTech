import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import {Button} from 'reactstrap';
import SignUpPage from './SignUpPage';
import Login from './Login';
import Teacher from './Teacher';
import Student from './Student';
import './Student.css';
import './App.css';
import QuestionPaper from "./QuestionPaper";

// import AnswerSheet from "./Answersheet";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/sign' component={SignUpPage}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/teacher' component={Teacher}/>
                <Route exact path='/student' component={Student}/>
                <Route exact path='/questionpaper' component={QuestionPaper}/>
                {/* <Route exact path='/answersheet' component={AnswerSheet}/> */}
                
                {/* <div style={{display: 'flex'}}>
                    <div style={{background: "linear-gradient(to bottom right, #999966 16%, #ffffff 79%)", width: '50%', height: 760}}>
                        <h1 className="h1">EduLive</h1>
                        
                        <div style={{marginTop: '50%'}}>
                            <Link to={'/sign'}><Button className='button1'>Signup</Button></Link>
                            <Link to={'/login'}><Button className='button2'>Login</Button></Link>
                        </div>
                    </div>
                     <img src={require('./hands-typing.jpg')} style={{width: '50%', height: 760}} alt="img"/> 

                </div> */}
                <div className="back">
                    <h1 className="h1">EduLive</h1>
                        
                        <div style={{marginTop: '10%'}}>
                            <Link to={'/sign'}><Button className='bt'>Signup</Button></Link>
                            <Link to={'/login'}><Button className='bt'>Login</Button></Link>
                        </div>
                </div>

            </Switch>
        </Router>

    );
}

export default App;
