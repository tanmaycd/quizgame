import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Quiz from './components/quiz';
import Result from './components/result';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/quiz" element={<Quiz/>} />       
          <Route exact path="/result" element={<Result/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
