import { useState } from "react";
import './App.css'
import Board from './components/Board'

function App() {
  const [board, setBoard] = useState(Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => null)));

  const onReset = () => {
    setBoard(Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => null)));
  }

  return (
    <div className="App">
      <Board board={board} onReset={onReset} />
    </div>
  );
};

export default App