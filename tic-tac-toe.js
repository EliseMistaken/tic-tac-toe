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
    /*
        Needs game state, check for win, change a square, check square value, valid move check, check for tie
    */
    let board = Array(9).fill('');

    return {

    }
};

function player() {
    /*
        Needs
    */
    
    return {

    }
}