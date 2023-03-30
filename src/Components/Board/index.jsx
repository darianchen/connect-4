import { useState } from 'react';
import './index.css';

function Board({ board }) {
    const [turn, setTurn] = useState(1);
    const color = turn%2 === 0 ? 'yellow' : 'red';

    const handleMove = (e) => {
        const colIdx = e.target.getAttribute('idx');
        e.target.classList.remove(color);
        setTurn(turn + 1);
        
        for(let row = board.length - 1; row > -1; row--){
            if(!board[row][colIdx]) {
                board[row][colIdx] = color[0].toUpperCase();
                console.log(board);
                return;
            }
        }
    }

    const onMouseOver = (e) => {
        e.target.classList.add(color);
    }

    const onMouseLeave = (e) => {
        e.target.classList.remove(color);
    }

    return (
        <div>
            <div id="dropzone">
                {board[0].map((col, colIdx) => {
                    return <div key={colIdx} idx={colIdx} className="drop" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} onClick={handleMove}></div>
                })}
            </div>
            <div id="board">
                {board.map((row, rowIdx) => {
                    return <div className="row" key={rowIdx}>
                        {row.map((col, colIdx) => {
                            return <div className="cell" key={colIdx}>
                                <div className={`${board[rowIdx][colIdx] === null ? "empty" : board[rowIdx][colIdx] === "R" ? "red" : "yellow"}`}></div>
                            </div>
                        })}
                    </div>
                })}
            </div>
        </div>
    );
};

export default Board;