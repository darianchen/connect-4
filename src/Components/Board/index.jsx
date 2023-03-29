import { useState } from 'react';
import './index.css';

function Board() {
    const [turn, setTurn] = useState(1);
    let board = Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => null));

    return (
        <>
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
        </>
    );
};

export default Board;