import React from 'react';
import './App.css';
import logo from './logo.svg'; 

function App() {
  const studentId = "101414516";
  const name = "Diya Patel";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <p>React JS Programming Week09 Lab exercise</p>
        <p>Your Student ID: 101414516</p>
        <p>Your Name: patel Diya</p>
        <p>George Brown College, Toronto</p>
      </header>
    </div>
  );
}

export default App;