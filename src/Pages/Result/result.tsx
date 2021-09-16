import { useQuiz } from "../../context/quizprovider";

export default function Result(){
    const {state}=useQuiz()
    return (
        <div>
           <h2> Quiz Ended</h2>
           <h4>Your Score is {state.score} </h4>
        </div>
    );
}