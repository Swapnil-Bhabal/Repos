let computerWinCounter = 0;
let playerWinCounter = 0;

function computerPlay() {
    const computersTurn = ["rock", "paper", "scissor"];
    return (computersTurn[Math.floor(Math.random() * 3)]);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        console.log("Its a Tie");
    } else if ((computerSelection === "paper" && playerSelection === "rock") || 
            (computerSelection === "scissor" && playerSelection === "paper") || 
            (computerSelection === "rock" && playerSelection === "scissor")) {
                console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                computerWinCounter++;
            } else {
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);  
                playerWinCounter++;
            }
}

function game() {
    for (i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    if (computerWinCounter > playerWinCounter) {
        console.log("Computer wins the game");
    } else {
        console.log("Yuhooo, you won this one.");
    }
}
const playerSelection = prompt('Whats your call?');
console.log(game());