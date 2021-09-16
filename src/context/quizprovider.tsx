import { useContext, useReducer, useEffect } from "react";

import {Quizstate} from"../data/quizTypes";
import React from "react";
import axios from "axios";
import quizReducer from "../reducer/quizReducer";

const QuizContext = React.createContext<any>(null);


  export const QuizProvider: React.FC=({ children }) => {
    useEffect(() => {
      (async () => {
        const { success,quiz:data } = await axios
          .get("https://quiz.saswatidas.repl.co/movies")
          .then((response:any) => {
            return response.data;
          });
          console.log(data);
          if(success){
        dispatch({ type: "FETCH_INFO", payload: {quizname:data[0].quizname,questions:data[0].questions} });}
      })();
    }, []);
    const initialQuizState:Quizstate= {
      quizname:"",
      questionNumber:0,
      score:0,
      questions:[],
      quizLoaded:false
    }
    const [state, dispatch]:any= useReducer<any>(quizReducer, initialQuizState);
    return (
      <QuizContext.Provider value={{state ,dispatch }}>
        {children}
      </QuizContext.Provider>
    );
  };
  
  export function useQuiz(){
    return useContext(QuizContext);
  };