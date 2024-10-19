import React from 'react';

function Score({ score, total }) {
    return (
        <div className="score-container">
            <h1>Your Score</h1>
            <p>{score} out of {total}</p>
        </div>
    );
}

export default Score;
