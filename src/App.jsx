import './App.css'
import Board from './Components/Board'

function App() {
  let board = Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => null));

  return (
    <div className="App">
      <Board board={board} />
    </div>
  );
};

export default App