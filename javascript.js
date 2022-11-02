let inputChoice = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return inputChoice[Math.floor(Math.random()*inputChoice.length)];
}

function playRound(computer, player) {

    player = player.toLowerCase();

    if (computer == "rock" && player == "scissors") {
        return "You Lose!";
    }

    if (computer == "rock" && player == "rock") {
        return "Draw!";
    }

    if (computer == "rock" && player == "paper") {
        return "You Win!";
    }

    if (computer == "paper" && player == "scissors") {
        return "You Win!";
    }

    if (computer == "paper" && player == "rock") {
        return "You Lose!";
    }

    if (computer == "paper" && player == "paper") {
        return "Draw!";
    }

    if (computer == "scissors" && player == "scissors") {
        return "Draw";
    }

    if (computer == "scissors" && player == "rock") {
        return "You Win!";
    }

    if (computer == "scissors" && player == "paper") {
        return "You Lose!";
    }

}

function game() {
    let win = 0;
    let lose = 0;

    for (let i = 0; i < 5; i++) {
        
        const playerSelection = prompt("Chose").toLowerCase();
        const computerSelection = getComputerChoice();

        if(playRound(playerSelection, computerSelection) == "You Win!") {
            console.log("Win!");
            win++;
        } else if(playRound(playerSelection, computerSelection) == "You Lose!") {
            console.log("Lose!");
            lose++;
        } else {
            console.log("Draw!");
        }
    }

    if (win > lose) {
        return "You Win!";
    } else if (lose > win) {
        return "You Lose!";
    } else {
        return "It's Draw!";
    }
}