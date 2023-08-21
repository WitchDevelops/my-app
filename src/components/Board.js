import { useState } from "react";
import Square from "./Square.js";
import "./Board.css";

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = (xIsNext ? "X" : "O") + " turn";
  }

  function handleClick(i) {
    // do nothing if a square already has something in it OR winner is established
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    // make a copy of the square state array
    const nextSquares = squares.slice();

    // to enable two players
    if (xIsNext) {
      nextSquares[i] = "X";
      
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  // reset the squares array to play again
  function resetButton() {
    setSquares(Array(9).fill(null));
  }

  return (
    <div className="main">
      <div className="header">
        <div className="logo"></div>
        <div className="turn__container">
            <div className="turn__icon">{(xIsNext ? "X" : "O")}</div>
            <p className="turn__text">turn</p>
        </div>
        <div className="reset" onClick={resetButton}></div>
      </div>
      <div className="status">{status}</div>
      <div className="board">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
