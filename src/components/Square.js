//import { useState } from 'react';
//import handleClick from "./Board.js";
import "./Square.css";

export default function Square({ value, onSquareClick }) {


  return (
    <button 
      className="square" 
      onClick={onSquareClick}
      >
      {value}
    </button>
  );
}
