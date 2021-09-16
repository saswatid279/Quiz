import { useState } from "react";
import { Link } from "react-router-dom";


import "./home.css"
export default function Homepage() {
    const [name, setName] = useState("");
    const startQuiz = (name:String) => {
      console.log(name); 
    };

    return (
        <div className="home-container">
            
                <h2>Your Name</h2>
                <input id="name" onChange={(event) => setName(event.target.value)} placeholder="Enter your name" />
                
                <Link className="link"
                    to={`/quiz`}
                >
                    <button className="btn" onClick={()=>startQuiz(name)}>Start</button>
                    </Link>
            

        </div>
    );
}