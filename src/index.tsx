import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// 定義遊戲狀態的類型
interface GameState {
  squares: (string | null)[];
  xIsNext: boolean;
  winner: string | null;
  gameOver: boolean;
  winningLine: number[] | null;
}

// 定義勝利結果的類型
interface WinnerResult {
  winner: string | null;
  line: number[] | null;
}

// 遊戲組件
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

  // 計算勝利者
  calculateWinner(squares: (string | null)[]): WinnerResult {
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

  // 檢查是否平局
  isDraw(squares: (string | null)[]): boolean {
    return squares.every((square) => square !== null);
  }

  // 處理點擊事件
  handleClick(i: number): void {
    const squares = this.state.squares.slice();

    // 如果已經有勝利者或者格子已經被佔用，則不允許點擊
    if (this.state.winner || squares[i] || this.state.gameOver) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";
    const result = this.calculateWinner(squares);
    const gameOver = result.winner? true : false || this.isDraw(squares);

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      winner: result.winner,
      gameOver: gameOver,
      winningLine: result.line,
    });
  }

  // 重新開始遊戲
  resetGame(): void {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: null,
      gameOver: false,
      winningLine: null,
    });
  }

  // 渲染單個格子
  renderSquare(i: number): React.ReactElement {
    const isWinningSquare =
      this.state.winningLine && this.state.winningLine.includes(i);
    return (
      <button
        className={`square ${isWinningSquare ? "winner" : ""}`}
        onClick={() => this.handleClick(i)}
      >
        {this.state.squares[i]}
      </button>
    );
  }

  initBoardRows(): React.ReactElement[] {
    const boardRows = [];
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        row.push(this.renderSquare(i * 3 + j));
      }
      boardRows.push(
        <div key={i} className="board-row">
          {row}
        </div>
      );
    }
    return boardRows;
  }

  getGameStatus(): string {
    const winner = this.state.winner;
    const gameOver = this.state.gameOver;
    const xIsNext = this.state.xIsNext;

    if (winner) {
      return `🎉 獲勝者: ${winner} 🎉`;
    } else if (gameOver) {
      return "🤝 遊戲平局！";
    } else {
      return `👤 下一個玩家: ${xIsNext ? "X" : "O"}`;
    }
  }

  render(): React.ReactElement {
    return (
      <div className="game">
        <h1 className="game-title">🎮 圈圈叉叉遊戲</h1>
        <div className="game-info">
          <div className="status">{this.getGameStatus()}</div>
          <button className="reset-button" onClick={() => this.resetGame()}>
            🔄 重新開始
          </button>
        </div>
        <div className="game-board">
          {this.initBoardRows()}
        </div>
      </div>
    );
  }
}

// 渲染應用
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<TicTacToe />); 