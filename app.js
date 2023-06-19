const choices = ["Rock", "Paper", "Scissor"];
let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
    const number = Math.floor(Math.random() * choices.length);
    return choices[number]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    switch(playerSelection) {
        case "rock":
            if (computerSelection === "scissor") {
                console.log(`Player wins! player chose ${playerSelection}, computer chose ${computerSelection}`);
            } else if (computerSelection === "rock") {
                console.log(`Both participants used ${playerSelection} - this round is a draw`)
            } else {
                console.log(`Player loses! player chose ${playerSelection}, computer chose ${computerSelection}`);
            }
            break;

        case "paper":
            if (computerSelection === "rock") {
                console.log(`Player wins! player chose ${playerSelection}, computer chose ${computerSelection}`);
            } else if (computerSelection === "paper") {
                console.log(`Both participants used ${playerSelection} - this round is a draw`)
            } else {
                console.log(`Player loses! player chose ${playerSelection}, computer chose ${computerSelection}`);
            }
            break;

        case "scissor":
            if (computerSelection === "paper") {
                console.log(`Player wins! player chose ${playerSelection}, computer chose ${computerSelection}`);
            } else if (computerSelection === "scissor") {
                console.log(`Both participants used ${playerSelection} - this round is a draw`)
            } else {
                console.log(`Player loses! player chose ${playerSelection}, computer chose ${computerSelection}`);
            }
            break;
    }
}

const playerSelection = "scissor";
const computerSelection = getComputerChoice();

console.log(computerSelection);
console.log(playerSelection);

playRound(playerSelection, computerSelection);