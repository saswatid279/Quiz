import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quizprovider";
import "./quiz.css"
const Quizpage = () => {
    const { state, dispatch } = useQuiz();
    const [message,setmessage]=useState<String|null>()
    const [optionclicked, setoptionClicked] = useState<boolean>(false)
    const navigate = useNavigate();
    const nextQuestion = (questionNumber: number) => {
        setoptionClicked(false)
        if (questionNumber >= 4)
            navigate("/result");
        else{
            setmessage("");
            dispatch({ type: "NEXT_QUESTION" });
        }
    };
    function optionClickHandler(option: any) {
        setoptionClicked(true)
        let msg=(option.isCorrect )?"Your answer is correct": "Your answer is wrong"
        setmessage(msg);
        dispatch({ type: "CALC_SCORE", payload: option.isCorrect ? state.questions[state.questionNumber].points : -1 })
    }
    function resetHandler(username: String) {
        setoptionClicked(false)
        dispatch({ type: "RESET", payload: username })
    }

    return (
        <div className="quiz-container">
            {state.quizLoaded === false && <div>Loading...</div>}
            {state.quizLoaded && <div className="quizpage-container">
                <div className="score-container">
                    <h3>Question No: {state.questionNumber + 1}</h3>
                    <h3>{state.username}'s score: {state.score}</h3>

                </div>
                <div className="question-container">
                    {state.questions[state.questionNumber].question}
                    {state.questions[state.questionNumber].options.map((option: any) => {
                        return (
                            <li>
                                <button disabled={optionclicked} onClick={() => optionClickHandler(option)}><span>{option.value}</span></button>
                            </li>
                        )
                    })}
                    <button onClick={() => nextQuestion(state.questionNumber)}>Next Question</button>
                    <button onClick={() => resetHandler(state.username)}>Reset</button>
                    <div><span>{message}</span></div>
                </div>
               
            </div>}

        </div>
    );

}

export default Quizpage;
