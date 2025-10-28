// Get choice from Computer
function getcomputerChoice(max) {
    let computerChoice = Math.floor(Math.random() * max);

    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else if (computerChoice === 2) {
        return "Scissors";
    }
}

// to debug computer choice function - console.log(getcomputerChoice(3));
// Get choice from human
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?");
    humanChoice = humanChoice.toLocaleLowerCase();

    if  (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } else if (humanChoice === "scissors") {
        return "scissors";
    } else {
        return "Error";
    }
}

console.log(getHumanChoice());
// Check Scores
// Play Round
// Calculate Scores
// Play until 5 rounds
// Declare Winner