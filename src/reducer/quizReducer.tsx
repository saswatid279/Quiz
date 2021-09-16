import { Quizstate } from "../data/quizTypes";
import { Action } from "../data/quizTypes";


export default function quizReducer(state: Quizstate, action: Action) {

  switch (action.type) {
    case "RESET":
      return { ...state, username: action.payload, questionNumber: 0, score: 0 };
    case "INIT_NAME":
      return { ...state, username: action.payload }
    case "FETCH_INFO":
      console.log("reducer", action.payload.quizname);
      return { ...state, quizname: action.payload.quizname, questionNumber: 0, score: 0, questions: action.payload.questions, quizLoaded: true };
    case "NEXT_QUESTION":
      return { ...state, questionNumber: state.questionNumber + 1 }
    case "CALC_SCORE":
      return { ...state, score: state.score + action.payload }
    case "INCREMENT":
      return { ...state, score: action.payload.score };

    default:
      return state;
  }
}