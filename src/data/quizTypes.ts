export type option = {
  value: string;
  isCorrect: boolean;
}

export type question = {
  question: string;
  points: number;
  options: option[]
}
export type Quizstate = {
  quizname: String;
  username: String;
  questionNumber: number;
  score: number;
  questions: question[];
  quizLoaded: boolean
}
export type Quiz = {
  quizname: String;
  questions: question[];
}

export type statusState = "starting" | "finished" | "reset";

export type Action =
  | { type: "RESET"; payload: { username: String } }
  | { type: "INIT_NAME"; payload: { username: String } }
  | { type: "FETCH_INFO"; payload: { quizname: String, questions: [] } }
  | { type: "NEXT_QUESTION" }
  | { type: "CALC_SCORE"; payload: number }
  | { type: "INCREMENT"; payload: { score: number } }
  | { type: "DECREMENT"; payload: { negativeScore: number } };

