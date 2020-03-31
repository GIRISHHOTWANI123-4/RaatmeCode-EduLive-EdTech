import React from 'react';
import {Button} from 'reactstrap';
import Footer from './Footer';
import './Student.css';
function Info()
{
  var a=prompt("Enter the Secret code");
  alert(a);
}
function Student() {
  return (
    <div>

    <div className="App">
    <i className='fas fa-search'> </i>  <h1>Welcome To EdTech Classroom</h1>
    </div>
    <div className="Button">
    <Button style={{marginLeft:500,padding:11,color:'black',borderRadius:20}} onClick={Info}><h3 className='h3'>Join Class</h3></Button>
    <Button style={{marginLeft:100,padding:11,color:'black',borderRadius:20}}><h3 className='h3'>Start Quiz</h3></Button>
    <Button style={{marginLeft:100,padding:11,color:'black',borderRadius:20}}><h3 className='h3'>View Score</h3></Button>
    </div>

    <Footer/>

    </div>


  );
}
export default Student;
