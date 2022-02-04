let computerSelection;
let playerSelection;
let computerWinCounter = 0;
let playerWinCounter = 0;
let roundWinner = ''

let buttons = document.querySelectorAll('button');
const headerDiv = document.querySelector('#header');
const resultsDiv = document.querySelector('#results');

function computerPlay() {
    const computersTurn = ["rock", "paper", "scissor"];
    return (computersTurn[Math.floor(Math.random() * 3)]);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        roundWinner = "Tie";
    } else if ((computerSelection === "paper" && playerSelection === "rock") || 
            (computerSelection === "scissor" && playerSelection === "paper") || 
            (computerSelection === "rock" && playerSelection === "scissor")) {
                roundWinner = "Loose";
                computerWinCounter++;      
            } else {
                roundWinner = "Win";
                playerWinCounter++;
            }
}

function game() {
        if (computerWinCounter > playerWinCounter) {
            headerDiv.innerText = "Computer wins the game";
        } else {
            headerDiv.innerText = "Yuhooo, you won this one.";
        }
}

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        playerSelection = btn.innerText.toLowerCase();
        computerSelection = computerPlay();
        if ((computerWinCounter || playerWinCounter) === 5) {
            game();        
        } else {
            headerDiv.innerText = `Score Board : Player = ${playerWinCounter}  Computer = ${computerWinCounter}`;
            playRound(playerSelection, computerSelection);
            winnerOfRound();
        }
    })
})


function winnerOfRound() {
    if (roundWinner === "Tie") {
        resultsDiv.innerText = "Its a tie";
    } else if (roundWinner === "Loose") {
        resultsDiv.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        resultsDiv.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
    }
}  


