import React, { Component } from 'react';
import './teacher.css'

class Teacher extends Component{
    render(){
        return(
            <div className="main">

                <div className="header">
                    <h1>Welcome To EdTech Classroom</h1>
                </div>

                <div className="buttons">
                    <button className = "live">Start Live Stream</button>
                    <div class="divider"/>
                    <button className = "live">Start Quiz</button>
                    <div class="divider"/>
                    <button className = "live">Prepare Quiz</button>
                    <div class="divider"/>
                    
                </div>
                <div className ="footer"></div>

            </div>
        )
    }
}

export default Teacher;

