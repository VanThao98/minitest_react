// src/components/Scores.jsx
import React from "react";
import '../assets/app.css';

function Scores({ courseName, results }) {
  return (
    <div className="scores">
      <h1>{courseName}</h1>

      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.firstName}</td>
              <td>{result.lastName}</td>
              <td className={result.score > 50 ? "higher_five" : "lower_five"}>{result.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Scores;
