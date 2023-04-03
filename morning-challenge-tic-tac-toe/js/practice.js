const won = document.querySelector('#won')
const turn = document.querySelector('#myturn')
let currentPlayer = 'X';
const restart = document.querySelector('#restart');
let cells = document.querySelectorAll('.square');
cells = Array.from(cells);

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.innerText != ""){
            //I know i need a return to stop it from running but I do not fully understand why becuase we are using a loop?
            return;
        }

        cell.innerText = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
             turn.innerText = `It's ${currentPlayer}'s turn`;
       
            gameBoard.checkWinner()

        if (!gameBoard.checkWinner()) {
            gameBoard.checkTie();

            
        }
    });
});
class GameBoard {
    checkTie() {
        let tie = cells.every((element,index) => cells[index].innerText == 'X' || cells[index].innerText === 'O');
        
        if(tie) {
            won.innerText = "It's a tie!";
        }
    }
//can't figure out how to fix the bug that allows for winning result to appear before next player goes. 
    checkWinner() {
 if(cells[0].innerText === currentPlayer && cells[1].innerText === currentPlayer && cells[2].innerText === currentPlayer) {
    won.innerText = `Congratulations ${currentPlayer}, you won!`
 }
 if(cells[3].innerText === currentPlayer && cells[4].innerText === currentPlayer && cells[5].innerText === currentPlayer) {
    won.innerText = `Congratulations ${currentPlayer}, you won!`
 }if(cells[6].innerText === currentPlayer && cells[7].innerText === currentPlayer && cells[8].innerText === currentPlayer) {
    won.innerText = `Congratulations ${currentPlayer}, you won!`
 }if(cells[0].innerText === currentPlayer && cells[3].innerText === currentPlayer && cells[6].innerText === currentPlayer) {
    won.innerText = `Congratulations ${currentPlayer}, you won!`
 }if(cells[1].innerText === currentPlayer && cells[4].innerText === currentPlayer && cells[7].innerText === currentPlayer) {
    won.innerText = `Congratulations ${currentPlayer}, you won!`
 }if(cells[2].innerText === currentPlayer && cells[5].innerText === currentPlayer && cells[8].innerText === currentPlayer) {
    won.innerText = `Congratulations ${currentPlayer}, you won!`
 }if(cells[2].innerText === currentPlayer && cells[4].innerText === currentPlayer && cells[6].innerText === currentPlayer) {
    won.innerText = `Congratulations ${currentPlayer}, you won!`
 }if(cells[0].innerText === currentPlayer && cells[4].innerText === currentPlayer && cells[5].innerText === currentPlayer) {
    won.innerText = `Congratulations ${currentPlayer}, you won!`
 }
    }
}

const gameBoard = new GameBoard();

restart.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.innerText = '';
        won.innerText = 'Who will win?'
        turn.innerText = `It's X's turn`;
    });
});
