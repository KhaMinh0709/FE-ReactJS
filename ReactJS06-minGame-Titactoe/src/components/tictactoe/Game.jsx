import React, { useState } from 'react';
import './GameStyle.css';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null); 

    const handleClick = (index) => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        const newWinner = checkWinner(newBoard); // Sử dụng biến tạm thời newWinner
        if (newWinner) {
            setWinner(newWinner); // Cập nhật trạng thái winner
        } else {
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
    };

    const checkWinner = (board) => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setCurrentPlayer('X');
        setWinner(null);
    };

    return (
        <div className="game-container">
            <Board board={board} onClick={handleClick} />
            {winner ? (
                <div className="winner-announcement">
                    Người chiến thắng: {winner}
                    <button onClick={resetGame}>Chơi lại</button>
                </div>
            ) : (
                <div className="player-turn">Lượt của: {currentPlayer}</div>
            )}
        </div>
    );
};

const Board = ({ board, onClick } ) => {
    return (
        <div className="game-board">
            {board.map((value, index) => (
                <Cells
                    key={index}
                    value={value}
                    onClick={() => onClick(index)}
                />
            ))}
        </div>
    );
};

const Cells = ({ value, onClick }) => {
    return (
        <div className="game-cell" onClick={onClick}>
            {value}
        </div>
    );
};

export default Game;
