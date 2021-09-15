import React from "react";
import {useState} from "react";
import {question} from "../../data/quizTypes";
import {props} from "../../data/quizTypes";

import {option} from "../../data/quizTypes";
//import {calculateScore} from "../../utils/scorekeeper";
import { useQuiz } from "../../context/quizprovider";


const Questioncard:React.FC<props>=({ score,question,points,options})=>{
   const {dispatch}=useQuiz();
    return (
       <>
        <div>Question Card</div> 
        <h4>Score: {score}</h4>
        <h3>{question}</h3>
        <div>{options.map((option)=>{
            <li>
                <button disabled={option.isCorrect} onClick={()=>dispatch({type:"CALC_SCORE",payload:option.isCorrect?points:-1})}><span>{option.value}</span></button>
            </li>
        })}</div>
        </>
    )
}

export default Questioncard;