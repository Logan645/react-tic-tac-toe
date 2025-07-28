import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>歡迎來到我的應用</h1>
      <p>這是一個使用 React 和 TypeScript 構建的多頁面應用。</p>
      <div className="features">
        <Link to="/game">
          <div className="feature-card">
            <h3>🎮 井字遊戲</h3>
            <p>經典的井字遊戲，支持雙人對戰</p>
          </div>
        </Link>
        <Link to="/settings">
          <div className="feature-card">
            <h3>⚙️ 設置</h3>
            <p>自定義遊戲設置和偏好</p>
          </div>
        </Link>
        <Link to="/about">
          <div className="feature-card">
            <h3>ℹ️ 關於</h3>
            <p>了解更多關於這個應用的信息</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home; 