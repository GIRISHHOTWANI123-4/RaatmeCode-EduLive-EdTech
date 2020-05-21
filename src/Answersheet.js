import React, {useEffect, useState} from "react";
import * as axios from "axios";
import Input from "./Input";
import './answersheet.css';

function AnswerSheet() {
    let count = 0;
    const [data, setData] = useState([""]);
    useEffect(() => {
        // console.log("Inside UseEffect");
        axios("http://localhost:4001/getquestions")
            .then((response) => setData(response.data));
      }, [])


    function display(value) {
        {   ++count;
            //console.log(value.defaultValue);
        }
        return (
            <Input question={value.question} option1={value.option1} option2={value.option2}
     option3={value.option3} option4={value.option4} answer={"answer" + count.toString()} count={count.toString()}/>
        );

    }

    return (

        <form   action={"http://localhost:4001/answer"} method={"post"}>

            <div id={"quizForm"}>
                <h1 className={"heading"}> EDTECH QUIZ</h1>
                {data.map(display)}
                <br/>
                <label>Total Questions</label><br/>
                <input name={"count"} value={data.length} /> <br/><br/>
                <button className={"ansbut"} type={"submit"}>END TEST</button>
            </div>
        </form>
    );
}

export default AnswerSheet;