import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './result.css';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score } = location.state;

  return (
    <div className="result">
      <h1>Your Score: {score}</h1>
      <button onClick={() => navigate('/')}>Play Again</button>
    </div>
  );
};

export default Result;

