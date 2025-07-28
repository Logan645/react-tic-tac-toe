import React, { useState, useEffect } from "react";

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
const TicTacToe: React.FC = () => {
  // 遊戲狀態
  const [gameState, setGameState] = useState<GameState>({
    squares: Array(9).fill(null),
    xIsNext: true,
    winner: null,
    gameOver: false,
    winningLine: null,
  });

  // 黑夜模式狀態
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // 組件掛載時，從本地存儲恢復主題設置
  useEffect(() => {
    const savedTheme = localStorage.getItem('tictactoe-theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // 當主題改變時，更新 CSS 類名和本地存儲
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    
    // 保存主題設置到本地存儲
    localStorage.setItem('tictactoe-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // 當有勝利者時，顯示祝賀訊息
  useEffect(() => {
    if (gameState.winner) {
      console.log(`🎉 恭喜 ${gameState.winner} 獲勝！`);
    }
  }, [gameState.winner]);

  // 計算勝利者
  const calculateWinner = (squares: (string | null)[]): WinnerResult => {
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
  };

  // 檢查是否平局
  const isDraw = (squares: (string | null)[]): boolean => {
    return squares.every((square) => square !== null);
  };

  // 處理點擊事件
  const handleClick = (i: number): void => {
    const squares = gameState.squares.slice();

    // 如果已經有勝利者或者格子已經被佔用，則不允許點擊
    if (gameState.winner || squares[i] || gameState.gameOver) {
      return;
    }

    squares[i] = gameState.xIsNext ? "X" : "O";
    const result = calculateWinner(squares);
    const gameOver = result.winner ? true : false || isDraw(squares);

    setGameState({
      squares: squares,
      xIsNext: !gameState.xIsNext,
      winner: result.winner,
      gameOver: gameOver,
      winningLine: result.line,
    });
  };

  // 重新開始遊戲
  const resetGame = (): void => {
    setGameState({
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: null,
      gameOver: false,
      winningLine: null,
    });
  };

  // 切換黑夜模式
  const toggleDarkMode = (): void => {
    setIsDarkMode(!isDarkMode);
  };

  // 渲染單個格子
  const renderSquare = (i: number): React.ReactElement => {
    const isWinningSquare =
      gameState.winningLine && gameState.winningLine.includes(i);
    return (
      <button
        className={`square ${isWinningSquare ? "winner" : ""}`}
        onClick={() => handleClick(i)}
      >
        {gameState.squares[i]}
      </button>
    );
  };

  // 初始化棋盤行
  const initBoardRows = (): React.ReactElement[] => {
    const boardRows = [];
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        row.push(renderSquare(i * 3 + j));
      }
      boardRows.push(
        <div key={i} className="board-row">
          {row}
        </div>
      );
    }
    return boardRows;
  };

  // 獲取遊戲狀態
  const getGameStatus = (): string => {
    const winner = gameState.winner;
    const gameOver = gameState.gameOver;
    const xIsNext = gameState.xIsNext;

    if (winner) {
      return `🎉 獲勝者: ${winner} 🎉`;
    } else if (gameOver) {
      return "🤝 遊戲平局！";
    } else {
      return `👤 下一個玩家: ${xIsNext ? "X" : "O"}`;
    }
  };

  return (
    <div className="game">
      <div className="header">
        <h1 className="game-title">🎮 圈圈叉叉遊戲</h1>
        <button 
          className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
      <div className="game-info">
        <div className="status">{getGameStatus()}</div>
        <button className="reset-button" onClick={resetGame}>
          🔄 重新開始
        </button>
      </div>
      <div className="game-board">
        {initBoardRows()}
      </div>
    </div>
  );
};

export default TicTacToe; 