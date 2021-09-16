// import Questioncard from "../../components/QuestionCard/questionCard";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quizprovider";
 const Quizpage= ()=>{
    const {state,dispatch}=useQuiz();
    const navigate=useNavigate();
    const nextQuestion=(questionNumber: number)=>{
        if (questionNumber >= 0) 
            navigate("/result");
        else
            dispatch({ type: "NEXT_QUESTION" });
            
    };
    
    return(
        <>
        {state.quizLoaded===false && <div>Loading...</div>}
        {state.quizLoaded && <div className="quizpage-container">
        <h2>Question No: {state.questionNumber}</h2>
            <h4>Score: {state.score}</h4>
            {/* <Questioncard score={state.score} question={state.questions[state.questionNumber].question} points={state.questions[state.questionNumber].points} options={state.questions[state.questionNumber].options}/> */}
            
        {/* <h3>{state.questions[currentQueNo].question}</h3>
        <div>{state.questions[currentQueNo].options.map((option:any)=>{
           return( <li>
                <button onClick={()=>dispatch({type:"CALC_SCORE",payload:option.isCorrect?state.questions[currentQueNo].points:-1})}><span>{option.value}</span></button>
            </li>)
        })}</div> */}

            <div>{state.questions[state.questionNumber].question}</div>
            <div>{state.questions[state.questionNumber].options.map((option:any)=>{
               return (
                    <li>
                        <button onClick={()=>dispatch({type:"CALC_SCORE",payload:option.isCorrect?state.questions[state.questionNumber].points:-1})}><span>{option.value}</span></button>
                    </li>
                )
            })}</div>
            <button onClick={()=>nextQuestion(state.questionNumber)}>Next Question</button>
            
        </div>}
        
        </>
    );
    
}

export default Quizpage;
