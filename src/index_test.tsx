import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//定義
interface GameState {
    squares: (string | null)[];
    xIsNext: boolean;
    winner: string | null;
    gameOver: boolean;
    winningLine: number[] | null;
}

interface WinnerResults {
    winner: string | null;
    line: number[] | null;
}

class TicTacToe extends React.Component<{}, GameState> {
    constructor(props: {}) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          xIsNext: true,
          winner: null,
          gameOver: false,
          winningLine: null,
        };
    }

    calculateWinner(squares: (string | null)[]): WinnerResults {
        const lines: number[][] = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8], // 橫排
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8], // 豎排
          [0, 4, 8],
          [2, 4, 6], // 對角線
        ];
    
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
          ) {
            return { winner: squares[a], line: lines[i] };
          }
        }
        return { winner: null, line: null };
      }
}