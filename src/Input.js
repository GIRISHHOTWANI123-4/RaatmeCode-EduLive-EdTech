import React, {useState} from "react";

export default function Input(props) {
    const [ans, setAns] = useState({});

    function foo(event) {
        setAns({...ans, [event.target.name]: event.target.value});
    }

    let count=0;
    return (

        <div>
            <h1 style={{textAlign:"left"}}>{props.count+".  "+ props.question}</h1>
            <input  type={"radio"} name={props.answer} id={"answer"} onClick={foo} value={props.option1}/>{props.option1}<br/>
            <input  type={"radio"} name={props.answer} id={"answer"} onClick={foo} value={props.option2}/>{props.option2}<br/>
            <input  type={"radio"} name={props.answer} id={"answer"} onClick={foo} value={props.option3}/>{props.option3}<br/>
            <input  type={"radio"} name={props.answer} id={"answer"} onClick={foo} value={props.option4}/>{props.option4}<br/>

        </div>
    );
}

