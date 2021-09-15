import Questioncard from "../../components/QuestionCard/questionCard";
//import { Quiz } from "../../data/quizTypes";
import { useState } from "react";
import { useQuiz } from "../../context/quizprovider";
 const Quizpage= ()=>{
    const {state,dispatch}=useQuiz();
    const [currentQueNo, setCurrentQueNo] = useState<any>(0);
    const nextQuestion=()=>{
        setCurrentQueNo(currentQueNo+1);
    };
    
    return(
        <div className="quizpage-container">
           { console.log("state"+state.initialQuizState)}
            <h2>Question No: {currentQueNo}</h2>
            <Questioncard score={state.initialQuizState.score} question={state.initialQuizState.questions.question[currentQueNo]} points={state.initialQuizState.questions.points[currentQueNo]} options={state.questions.options[currentQueNo]}/>
            <button onClick={()=>nextQuestion}></button>
        </div>
    );
    
}

export default Quizpage;
