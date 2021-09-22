import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../../context/quizprovider";
import "./home.css"
export default function Homepage() {
    const [name, setName] = useState("");
    const { dispatch } = useQuiz();
    const startQuiz = (name: String) => {
        dispatch({ type: "INIT_NAME", payload: name })
    };

    return (
        <div className="home-container">
            <input type="text" id="name" onChange={(event) => setName(event.target.value)} placeholder="Enter your name" required/>
            <Link className="link" to={`/quiz`}>
                <button className="btn" onClick={() => startQuiz(name)}>Start</button>
            </Link>
        </div>
    );
}