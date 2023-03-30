    import { useState } from 'react';
    import './index.css';

    function Board({ board }) {
        const [turn, setTurn] = useState(1);
        const color = turn%2 === 0 ? 'yellow' : 'red';
        const styles = { '--hover-color': color };

        const handleMove = (e) => {
            const colIdx = e.target.getAttribute('idx');

            if(board[0][colIdx]) {
                alert("Column is full!");
                return;
            };

            for(let row = board.length - 1; row > -1; row--){
                if(!board[row][colIdx]) {
                    board[row][colIdx] = color[0].toUpperCase();
                    setTurn(turn + 1);
                    return;
                }
            }
        };

        return (
            <div>
                <div>Turn is {turn}</div>
                <div id="dropzone" style={styles}>
                    {board[0].map((col, colIdx) => {
                        return <div key={colIdx} idx={colIdx} className="drop" onClick={handleMove}><div id="piece" idx={colIdx}></div></div>
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