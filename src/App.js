import React, { useState } from 'react';
import Question from './components/Question';
import Score from './components/Score';
import './App.css';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    correctAnswer: 2
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'J.K. Rowling'],
    correctAnswer: 1
  },
  {
    question: 'What is the square root of 64?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 2
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerOptionClick = (index) => {
    const correct = index === questions[currentQuestion].correctAnswer;
    setSelectedOption(index);
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setShowScore(true);
      }
    }, 1000); // Wait for 1 second before moving to the next question
  };

  return (
    <div className="app">
      <header>
        <h1>Quiz Game App</h1>
      </header>
      {showScore ? (
        <Score score={score} total={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestion]}
          handleAnswerOptionClick={handleAnswerOptionClick}
          selectedOption={selectedOption}
          isCorrect={isCorrect}
        />
      )}
    </div>
  );
}

export default App;
