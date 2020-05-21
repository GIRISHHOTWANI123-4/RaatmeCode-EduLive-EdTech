import React, {useEffect, useState} from "react";
import * as axios from "axios";
import './score.css';



function Score()
{
    const [resultScore,setResult]=useState("");

        useEffect(() => {
            axios.get("http://localhost:4001/result")
                .then((response) => {
                    setResult(response.data)
                })
        })


   return(
         <div className={"main"}>
             <h1>YOUR SCORE IS {resultScore}</h1>
             <br/>
             <h1>THANK YOU FOR CHOOSING EDULIVE</h1>
         </div>
   )
}

export default Score;