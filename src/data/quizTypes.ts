export type option={
    value:string;
    isCorrect:boolean;
  }
  export type props={
    score:number;
    question:string;
    points:number;
    options:option[]
  }
  export type question={
    question:string;
    points:number;
    options:option[]
  }
  export type Quizstate={
    quizname:String;
    score:number;
    questions:question[];
  }
  export type Quiz={
    quizname:String;
    questions:question[];
  }
  export type header={
    username:string;
    score:number
  }
  export type statusState= "starting"|"finished"|"reset";
  //export type category= "Movies"|"Science"|"Food";
 
  // export type QuizState = {
  //   score: number;
  //   quiz:Quiz;
  // };

  export type Action =
  | { type: "RESET" }
  | {type:"FETCH_INFO"; payload:Quiz}
  | {type:"CALC_SCORE"; payload:number}
  | { type: "INCREMENT"; payload: { score: number } }
  | { type: "DECREMENT"; payload: { negativeScore: number } };

  