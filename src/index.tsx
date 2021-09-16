import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {QuizProvider} from "./context/quizprovider"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <Router>
  <React.StrictMode>
    <QuizProvider>
    <App />
    </QuizProvider>
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
