import React from "react";
import {props} from "../../data/quizTypes";
// import { useState } from "react";
// import { useQuiz } from "../../context/quizprovider";


const Questioncard:React.FC<props>=({ score,question,points,options})=>{
  // const {dispatch}=useQuiz();
  
    return (
       <>
       {/* <div>{question}</div>
            <div>{options.map((option:any)=>{
               return (
                    <li>
                        <button onClick={()=>dispatch({type:"CALC_SCORE",payload:option.isCorrect?points:-1})}><span>{option.value}</span></button>
                    </li>
                )
            })}</div> */}
        
        
        </>
    )
}

export default Questioncard;