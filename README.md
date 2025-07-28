# 🎮 React Tic-Tac-Toe Game

A classic Tic-Tac-Toe game built with React and TypeScript, designed for learning React fundamentals.

![React](https://img.shields.io/badge/React-18.0.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🎯 **Classic Gameplay**：Complete Tic-Tac-Toe game logic
- 🏆 **Win Detection**：Automatically detects wins in rows, columns, and diagonals
- 🤝 **Draw Detection**：Detects when the game ends in a tie
- 🎨 **Dark Mode**：Toggle between light and dark themes
- 💾 **Theme Persistence**：Your theme choice is automatically saved
- 📱 **Responsive Design**：Works on all screen sizes
- ⚡ **Visual Feedback**：Highlights winning combinations
- 🔄 **Game Reset**：One-click game restart

## 🛠️ Tech Stack

- **React 18** - Modern React framework
- **TypeScript** - Type-safe JavaScript
- **CSS3** - Modern styling and animations
- **LocalStorage** - Local data persistence
- **React Hooks** - useState, useEffect

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14.0.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Logan645/react-tic-tac-toe.git
cd react-tic-tac-toe
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

4. **Open your browser**
Visit [http://localhost:3000](http://localhost:3000) to start playing!

## 🎮 How to Play

1. **Start Game**：Player X goes first
2. **Take Turns**：Click on empty squares to place X or O
3. **Win Condition**：Get three in a row (horizontal, vertical, or diagonal)
4. **Restart**：Click the "Reset Game" button
5. **Switch Theme**：Click the sun/moon icon in the top right

## 📚 Learning Focus

This project covers core React concepts:

### 🎯 React Basics
- **Component Development**：Function components vs class components
- **State Management**：Using useState Hook
- **Event Handling**：Click events and state updates
- **Conditional Rendering**：Showing different content based on state

### 🔧 React Hooks
- **useState**：Managing component state
- **useEffect**：Handling side effects and lifecycle
- **Custom Hooks**：Logic reuse

### 🎨 Styling and Interaction
- **CSS Modularity**：Component style management
- **Animations**：CSS animations and transitions
- **Responsive Design**：Adapting to different devices

### 🔄 State Management
- **Immutability**：Correct ways to update state
- **State Lifting**：Sharing state between components
- **Local Storage**：Data persistence

## 🏗️ Project Structure

```
src/
├── index.tsx          # Main entry file
├── index.css          # Global styles
├── components/        # Components directory (expandable)
└── types/            # TypeScript type definitions (expandable)
```

## 🎯 Key Code Examples

### State Management
```typescript
const [gameState, setGameState] = useState<GameState>({
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null,
  gameOver: false,
  winningLine: null,
});
```

### Side Effects
```typescript
useEffect(() => {
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
  localStorage.setItem('tictactoe-theme', isDarkMode ? 'dark' : 'light');
}, [isDarkMode]);
```

## 🚀 Future Enhancements

This project can be extended with:

- [ ] **Game History**：Record each move
- [ ] **Undo Feature**：Go back to previous moves
- [ ] **Score System**：Track win/loss statistics
- [ ] **Sound Effects**：Add game sounds
- [ ] **AI Opponent**：Simple AI algorithm
- [ ] **Multiplayer**：Online gameplay

## 🤝 Contributing

Issues and Pull Requests are welcome!

1. Fork this project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Logan Liao**

- GitHub: [@Logan645](https://github.com/Logan645)
- Project Link: [https://github.com/Logan645/react-tic-tac-toe](https://github.com/Logan645/react-tic-tac-toe)

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Create React App](https://github.com/facebook/create-react-app)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

⭐ If this project helps you, please give it a star!
