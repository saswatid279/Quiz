import React from 'react'
import {
    Routes,
    Route
} from 'react-router-dom';
import QuizPage from '../Pages/Quiz/quizpage';
import HomePage from '../Pages/Home/home';
import Navbar from '../components/Navbar/navbar';
import Result from '../Pages/Result/result';


const RouterFunction = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={< HomePage />} />
                <Route path="/quiz" element={< QuizPage />} />
                <Route path="/result" element={< Result />} />
            </Routes>
        </div>
    )
}

export default RouterFunction;
