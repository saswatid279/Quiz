import React from 'react'
import {
    Routes,
    Route
} from 'react-router-dom';
import QuizPage from '../Pages/Quiz/quizpage';
import HomePage from '../Pages/Home/home';


const RouterFunction = () => {
    return (
        <div>
        <Routes>
        <Route path= "/" element = {< HomePage />} />
        <Route path = "/quiz" element = {< QuizPage />}/>
        </Routes>
         </div>
    )
}

export default RouterFunction;
