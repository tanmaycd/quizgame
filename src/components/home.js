import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Cricket Quiz Game</h1>
      <Link to="/quiz">
        <button>Start Quiz</button>
      </Link>
    </div>
  );
};

export default Home;
