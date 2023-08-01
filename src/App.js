import './App.css';
import { useState } from "react";
import Board from "./Board.jsx";

function App() {
  let [p1Score, setp1Score] = useState(0);
  let [p2Score, setp2Score] = useState(0);
  let board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  
  function resetGame() {
    setp1Score(0);
    setp2Score(0);
    board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
  }

  return (
    <div className="App">
      <div className="score-board">
        <h1>Player 1: {p1Score} - Player 2: {p2Score}</h1>
      </div>
      <Board />
      <div className="new-game">
        <button className="new-button" onClick={resetGame}>New Game</button>
      </div>
    </div>
  );
}

export default App;
