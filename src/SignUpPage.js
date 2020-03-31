import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import {Button} from 'reactstrap';
import App from './App';
import './SignUp.css';

class SignUpPage extends Component{
  constructor(props){
    super(props)

    this.state = {
      name :'',
      email :'',
      pass :'',
      institute:'',
      role: '',
    }
  }


  handleName(event){
    this.setState({
      name:event.target.value

    })
  }

  handlePass(event){
    this.setState({
      pass:event.target.value

    })

 }

  handleEmail(event){
    this.setState({
      email:event.target.value

    })
  }

  handleInstitue(event){
    this.setState({
      institute:event.target.value

    })
  }
  handleRole(event){
    this.setState({
      role:event.target.value

    })
  }

  render(){
    return (
      <div className='main'>
      <h1 style={{fontFamily:'cursive',fontStyle:'italic',textAlign:'center'}}>Sign Up Form </h1>

      <form>
      <div className='sign'>
      <label className='h3'>Name: </label>
      <input style ={{marginBottom:10,marginLeft:31,padding:7,borderRadius:13,borderColor:'grey'}}type="text" value = {this.state.name} onChange = {this.handleName.bind(this)}/>
      <br></br>
      <label className='h3'>Password:</label>
      <input style ={{marginBottom:10,marginLeft:5,padding:7,borderRadius:13,borderColor:'grey'}}type="password" value = {this.state.pass} onChange = {this.handlePass.bind(this)}/>
      <br></br>
      <label className='h3'>Email:</label>
      <input style ={{marginBottom:10,marginLeft:32,padding:7,borderRadius:13,borderColor:'grey'}} type="email" value = {this.state.email} onChange={this.handleEmail.bind(this)}/>
      <br></br>
      <label className='h3'>Institute:</label>
      <input style ={{marginBottom:10,marginLeft:13,padding:7,borderRadius:13,borderColor:'grey'}} type="text" value = {this.state.institute} onChange={this.handleInstitue.bind(this)}/>
      <br></br>
      <label className='h3's>Role:</label>
      <input style ={{marginBottom:25,marginLeft:38,padding:7,borderRadius:13,borderColor:'grey'}} type="text" value = {this.state.role} onChange={this.handleRole.bind(this)}/>
      <br></br>
      <Link to={'/'} style={{marginLeft:120}}><Button className='button' onClick={'submitHandler'}>Submit</Button></Link>
      </div>

      </form>
      </div>
    );

  }
}

export default SignUpPage;
