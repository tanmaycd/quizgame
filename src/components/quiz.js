import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './quiz.css';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple');
        setQuestions(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching questions', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigate('/result', { state: { score: score } });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz">
      <h2>Question {currentQuestion + 1}</h2>
      <p dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }} />
      <div className="answers">
        {questions[currentQuestion].incorrect_answers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswer(answer)} dangerouslySetInnerHTML={{ __html: answer }} />
        ))}
        <button onClick={() => handleAnswer(questions[currentQuestion].correct_answer)} dangerouslySetInnerHTML={{ __html: questions[currentQuestion].correct_answer }} />
      </div>
    </div>
  );
};

export default Quiz;
