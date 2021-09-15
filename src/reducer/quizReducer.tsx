import {Quizstate} from"../data/quizTypes";
import {Action} from"../data/quizTypes";


export default function quizReducer(state: Quizstate, action: Action) {
  
    switch (action.type) {
      case "RESET":
        return { ...state, score: 0 };
      
      case "FETCH_INFO":
        console.log(action.payload.quizname);
        return {...state, quizname: action.payload.quizname,score:0,questions:action.payload.questions}

      case "CALC_SCORE":
        return {...state, score:state.score+action.payload}
      case "INCREMENT":
        return { ...state, score: action.payload.score };
  
      default:
        return state;
    }
  }