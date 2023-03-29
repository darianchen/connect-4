import './index.css';

function Board() {
  const BOARD = Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => null));

  return (
    <div id="board">
        {BOARD.map((row, rowIdx) => {
            return <div className="row" key={rowIdx}>
                {row.map((col, colIdx) => {
                    return <div className="cell" key={colIdx}>
                        <div className='hole'></div>
                    </div>
                })}
            </div>
        })}
    </div>
  );
};

export default Board;