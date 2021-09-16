import { useContext, useReducer, useEffect } from "react";

import {Quizstate} from"../data/quizTypes";
import React from "react";
import axios from "axios";
import quizReducer from "../reducer/quizReducer";

const QuizContext = React.createContext<any>(null);


  export const QuizProvider: React.FC=({ children }) => {
    useEffect(() => {
      (async () => {
        const { quiz:data } = await axios
          .get("https://quiz.saswatidas.repl.co/movies")
          .then((response:any) => {
            console.log(response.data)
            return response.data;
          });
          console.log(data);
        dispatch({ type: "FETCH_INFO", payload: data });
      })();
    }, []);
    const initialQuizState:Quizstate= {
      quizname:"",
      score:0,
      questions:[]
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