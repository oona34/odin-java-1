function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() {
    let options = new Array["Rock", "Paper", "Scissors"];
    return options[getRandomInt(3)];
}

function playRound(playerSelection, computerSelection) {
    // your code here!

    let playerSelecClean = playerSelection.charAt(0).toUpperCase() + playerSelection.toLocaleLowerCase().slice(1);
    let computerSelClean = computerSelection.charAt(0).toUpperCase() + computerSelection.toLocaleLowerCase().slice(1);

    let win = "You Win!";
    let lose = "You Lose!";
    let tie = "Tie!";
    let outcome = "";

    if (playerSelecClean == "Rock") {
        if (computerSelClean == "Rock") {
            outcome = "tie";
        } else if (computerSelClean == "Paper") {
            outcome = "lose";
        } else if (computerSelClean == "Scissors") {
            outcome = "win";
        }
    } else if (playerSelecClean == "Paper") {
        if (computerSelClean == "Rock") {
            outcome = "win";
        } else if (computerSelClean == "Paper") {
            outcome = "tie";
        } else if (computerSelClean == "scissors") {
            outcome = "lose";
        }
    } else if (playerSelecClean == "Scissors") {
        if (computerSelClean == "rock") {
            outcome = "lose";
        } else if (computerSelClean == "Paper") {
            outcome = "win";
        } else if (computerSelClean == "Scissors") {
            outcome = "tie";
        }
    };
        
    switch (outcome) {
        case win:
            return `${outcome} ${playerSelecClean} beats ${computerSelClean}`;
        case lose:
            return `${outcome} ${computerSelClean} beats ${playerSelecClean}`;
        case tie:
            return `${outcome}`;
        default:
            break;
    };
    
  }
  
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  