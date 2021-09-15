import { useState } from "react";
import Quizpage from "../Quiz/quizpage";
import { Link } from "react-router-dom";


import "./home.css"
export default function Homepage() {
    const [name, setName] = useState("");
    const startQuiz = async () => {

    };

    return (
        <div className="home-container">
            <div className="x">
                <h2>Your Name</h2>
                <input id="name" onChange={(event) => setName(event.target.value)} placeholder="Enter your name" />
                {/* <h2>Select a Category</h2> */}
                {/* <select className="category" onChange={(e)=>{}}>
                    <option>Movies</option>
                    <option>Science</option>
                    <option>Food</option>
                </select> */}
                <Link
                    to={`/quiz`}
                >
                    <button className="btn">Start</button>
                    </Link>
            </div>

        </div>
    );
}