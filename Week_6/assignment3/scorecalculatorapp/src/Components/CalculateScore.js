import React, { useState } from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore() {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [total, setTotal] = useState('');
  const [goal, setGoal] = useState('');
  const [averageScore, setAverageScore] = useState(null);

  const calculateAverage = () => {
    if (total && goal) {
      const average = (parseFloat(total) / parseFloat(goal)) * 100;
      setAverageScore(average.toFixed(2));
    }
  };

  return (
    <div className="calculator-container">
      <h1>Student Score Calculator</h1>
      <div className="form-container">
        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter student name"
          />
        </div>
        
        <div className="input-group">
          <label>School:</label>
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            placeholder="Enter school name"
          />
        </div>
        
        <div className="input-group">
          <label>Total Score:</label>
          <input
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            placeholder="Enter total score"
          />
        </div>
        
        <div className="input-group">
          <label>Goal Score:</label>
          <input
            type="number"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Enter goal score"
          />
        </div>
        
        <button onClick={calculateAverage} className="calculate-btn">
          Calculate Average
        </button>
        
        {averageScore !== null && (
          <div className="result">
            <h2>Student Score Details</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>School:</strong> {school}</p>
            <p><strong>Total Score:</strong> {total}</p>
            <p><strong>Goal Score:</strong> {goal}</p>
            <p><strong>Average Score:</strong> {averageScore}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CalculateScore;
