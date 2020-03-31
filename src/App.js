import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';
import {Button,Card,CardBody,CardText,CardTitle} from 'reactstrap';
import SignUpPage from './SignUpPage';
import Login from './Login';
import './App.css';
function App() {
  return (
    <Router>
    <Switch>
    <Route  exact path='/sign'    component={SignUpPage}/>
    <Route  exact path='/login'   component={Login}/>

    <div style={{display: 'flex'}}>
    <div style={{backgroundColor:'#D2B48C', width:'50%', height:760}}>
    <h1 className='h1'>EdTech Forum</h1>
    <div style={{ marginTop: '50%'}}>
    <Link to={'/sign'}><Button className='button1'>Signup</Button></Link>
    <Link to={'/login'}><Button className='button2'>Login</Button></Link>
    </div>
    </div>
    <img src={require('./hands-typing.jpg')} style={{width:'50%',height:760}}/>
    </div>

    </Switch>
    </Router>

  );
}

export default App;
