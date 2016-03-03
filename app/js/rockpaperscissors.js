////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (!move) {
      move = getInput();
    }
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (!move) {
      move = randomPlay();
    }
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
      winner = 'tie';
    }
    else if ((playerMove === 'rock' && computerMove === 'scissors') ||
            (playerMove === 'scissors' && computerMove === 'paper') ||
            (playerMove = 'paper' && computerMove === 'rock')) {
      winner = 'player';
    }
    else {
      winner = 'computer';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner;
    var p;
    var c;
    var move;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while ((playerWins < 5) && (computerWins < 5)) {
      p = getPlayerMove(move);
      p = p.toLowerCase();
      c = getComputerMove(move);
      winner = getWinner(p, c);
      if (winner === 'player') {
        playerWins ++;
        console.log('The player takes this round, playing ' + p + ' versus the computer\'s ' + c + '!');
      }
      else if (winner === 'computer') {
        computerWins ++;
        console.log('The computer takes this round, playing ' + c + ' versus the player\'s ' + p + '!');
      }
      else {
        console.log('It\'s a tie!');
      }
      console.log('So far, the score is:');
      console.log('Player:', playerWins);
      console.log('Computer:', computerWins);
    }
    return [playerWins, computerWins];
}

playToFive();
