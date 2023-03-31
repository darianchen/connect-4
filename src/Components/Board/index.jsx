import { useState } from "react";
import "./index.css";
import drop from '../../assets/audio/drop.mp3';

function Board({ board, onReset }) {
  const [turn, setTurn] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const color = turn % 2 === 0 ? "yellow" : "red";
  const styles = { "--hover-color": color };
  const dropAudio = new Audio(drop);


  const handleReset = () => {
    setTurn(1);
    onReset();
  }

  const handleMove = (e) => {
    const col = parseInt(e.target.getAttribute("idx"));

    if (board[0][col]) {
      alert("Column is full!");
      return;
    }

    for (let row = board.length - 1; row > -1; row--) {
      if (!board[row][col]) {
        board[row][col] = color[0].toUpperCase();
        dropAudio.play();

        if (checkWin(row, col, color, board)) {
          setGameOver(true);
          alert("win");
          return;
        }

        setTurn(turn + 1);
        return;
      }
    }
  };

  const checkWin = (row, col, color, board) => {
    const dirs = [
      [1, 0],
      [0, 1],
      [1, 1],
      [-1, 1],
    ];

    for (let i = 0; i < dirs.length; i++) {
      let num = 1;
      let [newRow, newCol] = [row + dirs[i][0], col + dirs[i][1]];
      while (
        !outOfBounds(newRow, newCol) &&
        board[newRow][newCol] &&
        board[newRow][newCol] === color[0].toUpperCase()
      ) {
        // keep checking
        num++;
        newRow += dirs[i][0];
        newCol += dirs[i][1];
      }

      //other direction
      [newRow, newCol] = [row + -dirs[i][0], col + -dirs[i][1]];
      while (
        !outOfBounds(newRow, newCol) &&
        board[newRow][newCol] &&
        board[newRow][newCol] === color[0].toUpperCase()
      ) {
        num++;
        newRow += -dirs[i][0];
        newCol += -dirs[i][1];
      }

      if (num >= 4) return true;
    }
    return false;
  };

  const outOfBounds = (newRow, newCol) => {
    return newRow > 5 || newRow < 0 || newCol > 6 || newCol < 0;
  };

  return (
    <div>
      <div>Turn is {turn}</div>
      <button onClick={handleReset}>New Game</button>
      <div id="dropzone" style={styles}>
        {board[0].map((col, colIdx) => {
          return (
            <div
              key={colIdx}
              idx={colIdx}
              className="drop"
              onClick={handleMove}
            >
              <div id="piece" idx={colIdx}></div>
            </div>
          );
        })}
      </div>
      <div id="board">
        {board.map((row, rowIdx) => {
          return (
            <div className="row" key={rowIdx}>
              {row.map((col, colIdx) => {
                return (
                  <div className="cell" key={colIdx}>
                    <div
                      className={`${
                        board[rowIdx][colIdx] === null
                          ? "empty"
                          : board[rowIdx][colIdx] === "R"
                          ? "red"
                          : "yellow"
                      }`}
                    ></div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Board;