/*
        Game: Handles communication between the board and the players. Gameboard and 2 players.
        Gameboard: concerned with state, valid moves, and winning. 
        Player: I'm not sure tbh
        
        Input: event listeners on squares, fires, goes through game to get the player/x or o, then updates gameboard. 
        Counterpoint, odd moves are X and even moves are O, so it could just be on the game board. 

        Plan: lets build out the gameboard first, then see what's left for the game/players. I'm not convinced they need their own thing.
        Unless we're doing computer AI, that would probably need it's own module. 
*/
function gameBoard() {
    
    let board = Array(9).fill(''); //board is flattened, top left index is 0, incrementing across the row. bottom right corner index is 8
    let numMoves = 0;

    // False = no winner, true = winner
    function checkWin() {
        for( let i = 0; i < 9; i += 3){
            if(board[i] == board[i+1] == board[i+2] && board[i]) return true;
        }
        for (let i = 0 ; i<3; i++){
            if(board[i] == board[i+3] == board[i+6] && board[i]) return true;
        }
        return (board[0] == board[4] == board[8] && board[0])|| (board[2] == board[4] == board[6] && board[2]);
    }
    
    function checkTie() {
        return numMoves == 9 && !checkWin()
    }

    function move(position, marker) {
        if(board[position]) return false
            
        board[position] = marker;
        numMoves++;
        return true;
    }

    return {
        move,
        checkTie,
        checkWin
    }
};

function game() {
    //Should set up event listeners, handle game vs AI and pvp. Controller for the model(gameboard). 
    
    let board = gameBoard();

}

function player() {
    
    
    return {

    }
}