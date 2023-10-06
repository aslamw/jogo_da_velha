let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const board = document.getElementById('board');
const status = document.getElementById('status');

function checkWinner() {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return gameBoard[a];
        }
    }
    return null;
}

function checkDraw() {
    return !gameBoard.includes('');
}

function handleClick(index) {
    if (gameBoard[index] === '' && !checkWinner() && !checkDraw()) {
        gameBoard[index] = currentPlayer;
        document.getElementById(index).textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        status.textContent = `É a vez do Jogador ${currentPlayer}`;
    }

    const winner = checkWinner();
    if (winner) {
        status.textContent = `O Jogador ${winner} venceu!`;
    } else if (checkDraw()) {
        status.textContent = 'Empate!';
    }
}

function resetBoard() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    status.textContent = 'É a vez do Jogador X';

    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.textContent = '');
}

for (let i = 0; i < 9; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.setAttribute('id', i);
    square.addEventListener('click', () => handleClick(i));
    board.appendChild(square);
}
