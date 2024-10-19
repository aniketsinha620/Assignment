import React from 'react';

function Question({ question, handleAnswerOptionClick, selectedOption, isCorrect }) {
    return (
        <div className="question-container">
            <h2>{question.question}</h2>
            <div className="options">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerOptionClick(index)}
                        disabled={selectedOption !== null}
                        className={
                            selectedOption === index
                                ? isCorrect
                                    ? 'correct'
                                    : 'incorrect'
                                : ''
                        }
                    >
                        {index + 1}. {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Question;
