import React from "react";
import {props} from "../../data/quizTypes";

import { useQuiz } from "../../context/quizprovider";


const Questioncard:React.FC<props>=({ score,question,points,options})=>{
   const {dispatch}=useQuiz();
    return (
       <>
        <div>Question Card</div> 
        <h4>Score: {score}</h4>
        <h3>{question}</h3>
        <div>{options.map((option)=>{
           return( <li>
                <button disabled={option.isCorrect} onClick={()=>dispatch({type:"CALC_SCORE",payload:option.isCorrect?points:-1})}><span>{option.value}</span></button>
            </li>)
        })}</div>
        </>
    )
}

export default Questioncard;