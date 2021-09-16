import { useQuiz } from "../../context/quizprovider";
import { Link } from "react-router-dom";
import "./result.css";

export default function Result(){
    const {state,dispatch}=useQuiz()
    return (
        <div className="result-container">
            <div>
           <h2> Quiz Ended</h2>
           <h4>Your Score is {state.score} </h4>
           <Link to="/quiz">
               <button className="start-btn" onClick={()=>dispatch({type:"RESET",payload:state.username})}>Start Again</button>
            </Link>
            </div>
        </div>
    );
}