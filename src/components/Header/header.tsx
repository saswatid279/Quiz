import {header} from '../../data/quizTypes';
  
  
 export default function Header({username,score}:header){
    return(
    <>
    <h1>Quiz</h1>
    <h2>Welcome {username}</h2>
    <p>Your score is {score}</p>
    </>);
  }
