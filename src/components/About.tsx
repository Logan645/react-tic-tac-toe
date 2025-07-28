import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about">
      <h1>關於我們</h1>
      <div className="about-content">
        <section>
          <h2>應用介紹</h2>
          <p>
            這是一個使用 React 19 和 TypeScript 構建的現代化 Web 應用。
            我們致力於提供最佳的用户體驗和代碼質量。
          </p>
        </section>
        
        <section>
          <h2>技術棧</h2>
          <ul>
            <li>React 19 - 最新的 React 版本</li>
            <li>TypeScript - 類型安全的 JavaScript</li>
            <li>React Router - 客戶端路由</li>
            <li>CSS3 - 現代化樣式</li>
          </ul>
        </section>
        
        <section>
          <h2>功能特色</h2>
          <ul>
            <li>響應式設計</li>
            <li>多頁面路由</li>
            <li>井字遊戲</li>
            <li>設置管理</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About; 