import React, { useReducer } from 'react';
import './GameStyle.css';

// Định nghĩa reducer cho trò chơi
const gameReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK_CELL':
            if (state.board[action.payload] || state.winner) return state;

            const newBoard = [...state.board];
            newBoard[action.payload] = state.currentPlayer;

            const newWinner = checkWinner(newBoard);
            return {
                ...state,
                board: newBoard,
                winner: newWinner,
                currentPlayer: newWinner ? state.currentPlayer : (state.currentPlayer === 'X' ? 'O' : 'X'),
            };

        case 'RESET_GAME':
            return {
                board: Array(9).fill(null),
                currentPlayer: 'X',
                winner: null,
            };

        default:
            return state;
    }
};

// Kiểm tra người chiến thắng
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

const Game = () => {
    const initState = {
        board: Array(9).fill(null),
        currentPlayer: 'X',
        winner: null,
    };
    const [state, dispatch] = useReducer(gameReducer, initState);

    const handleClick = (index) => {
        dispatch({
            type: 'CLICK_CELL',
            payload: index,
        });
    };

    const resetGame = () => {
        dispatch({
            type: 'RESET_GAME',
        });
    };

    return (
        <div className="game-container">
            <Board board={state.board} onClick={handleClick} />
            {state.winner ? (
                <div className="winner-announcement">
                    Người chiến thắng: {state.winner}
                    <button onClick={resetGame}>Chơi lại</button>
                </div>
            ) : (
                <div className="player-turn">Lượt của: {state.currentPlayer}</div>
            )}
        </div>
    );
};

const Board = ({ board, onClick }) => {
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
