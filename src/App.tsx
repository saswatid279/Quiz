import { useState } from 'react';
import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar/navbar';
import Header from "./components/Header/header";
//import { calculateScore } from './utils/scorekeeper';
import './App.css';
import Quizpage from './Pages/Quiz/quizpage';
import Homepage from './Pages/Home/home';
import RouterFunction from './Router/router';


function App() {
  
  return (
    <div className="App">
      {/* <Navbar/>
      <Homepage/> */}
      <RouterFunction/>
    </div>
  );
}

export default App;
