import React, { Component } from 'react';
import {Button} from 'reactstrap';
import {BrowserRouter as Router,Switch ,Link,Route} from 'react-router-dom';
import Student from './Student';
import './Login.css';

class Login extends Component{
  constructor(props){
    super(props);

    this.state = {
      username :'',
      password :''
    };
  }

  handleName(event){
    this.setState({
      username:event.target.value

    })


  }

  handlePass(event){
    this.setState({
      password:event.target.value

    })

  }

  render(){
    return (
      <Router>
      <Switch>
      <Route exact path='/student' component={Student}/>
      <div>
      <div style={{backgroundColor:'cyan',paddingTop:100}}>
      <h1 style={{fontSize:40}}className='text'>EdTech Login Form</h1>
      </div>
      <div  className='btn-login'>
      <form onSubmit = {this.submitHandler} >
      <label className='text' style={{marginRight:16 }}>Username</label>
      <input style={{marginBottom:20,borderWidth:7 ,borderColor:'grey',borderRadius:12,borderColor:'#20B2AA'}}type="email" value = {this.state.username} placeholder='xyz@gmail.com'  onChange = {this.handleName.bind(this)}/>
      <br></br>
      <label className='text' style={{marginRight:22}}>Password</label>
      <input style={{borderWidth:7 ,borderColor:'grey',borderRadius:12,borderColor:'#20B2AA'}} type="password" value = {this.state.password} placeholder='****' onChange = {this.handlePass.bind(this)}/>
      </form>
      <Link to={'/student'}><Button style={{marginLeft:130,marginTop:20,paddingRight:5,paddingLeft:5,borderRadius:9,fontSize:20,fontFamily:'cursive'}}>Submit</Button></Link>
      </div>
      <div style={{backgroundColor:'cyan',paddingTop:150}}>

      </div>


      </div>
      </Switch>
      </Router>
    );

  }
}

export default Login;
