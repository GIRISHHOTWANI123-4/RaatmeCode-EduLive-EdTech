import React, { Component } from 'react';
import './teacher.css'

class Teacher extends Component{
    render(){
        return(
            <div className="main">
                <h1>Welcome To EdTech Classroom</h1>

                {/* <div className="buttons"> */}
                    <button className = "live">Start Live Stream</button>
                    <div className="divider"></div>
                    <button className = "live">Start Quiz</button>
                    <div className="divider"></div>
                    <button className = "live">Prepare Quiz</button>
                    
                    
                {/* </div> */}
                

            </div>
        )
    }
}

export default Teacher;

