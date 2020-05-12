import React, {useEffect, useState} from 'react'
import {Link, BrowserRouter, Route, Switch} from "react-router-dom";
import Teacher from "./Teacher";
function QuestionPaper() {

    const [result, setQuestion] = useState({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: ""
    });

    useEffect(() => {
        setQuestion({question: "", option1: "", option2: "", option3: "", option4: "", answer: ""});
    }, []);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/teacher' component={Teacher}/>
                {/*<Route exact path='/questionpaper' component={QuestionPaper}/>*/}
                <div>

                    <form action={"http://localhost:4001/addquestion"} id={"clearForm"} method={"post"}>
                        <label>Insert a Question</label><br/>
                        <textarea name={"question"} onChange={(event) => {
                            setQuestion({...result, [event.target.name]: event.target.value})
                        }}>
                        </textarea><br/>
                        <input name={"option1"} placeholder={"Option 1"} onChange={(e) => {
                            setQuestion({...result, [e.target.name]: e.target.value})
                        }}/><br/>
                        <input name={"option2"} placeholder={"Option 2"} onChange={(e) => {
                            setQuestion({...result, [e.target.name]: e.target.value})
                        }}/><br/>
                        <input name={"option3"} placeholder={"Option 3"} onChange={(e) => {
                            setQuestion({...result, [e.target.name]: e.target.value})
                        }}/><br/>
                        <input name={"option4"} placeholder={"Option 4"} onChange={(e) => {
                            setQuestion({...result, [e.target.name]: e.target.value})
                        }}/><br/>
                        <input name={"answer"} placeholder={"Correct Answer"} onChange={(e) => {
                            setQuestion({...result, [e.target.name]: e.target.value})
                        }}/><br/>

                        <button type={"submit"}> Add another question</button>
                        <br/>


                        <Link to={"/teacher"}>
                            <button>Done</button>
                        </Link>
                    </form>

                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default QuestionPaper;

