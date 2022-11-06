let inputChoice = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return inputChoice[Math.floor(Math.random()*inputChoice.length)];
}

function playRound(computer, player) {

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

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const pcResult = document.querySelector('.pcResult');
const playerResult = document.querySelector('.playerResult');
const result = document.querySelector('.result');

let numPcResult = 0;
let numPlayerResult = 0;

function isDone() {
    if (numPcResult == 5 || numPlayerResult == 5) {
        if (numPcResult > numPlayerResult) {
            result.innerHTML = '<h1>You  Lose!</h1>';
        } else {
            result.innerHTML = '<h1>You win!</h1>';
        }
    }
}

rock.addEventListener('click', function (e) {
    console.log(playRound(getComputerChoice(), "rock"));
    if ((playRound(getComputerChoice(), "rock")) == 'You Win!') {
        numPlayerResult++;
        playerResult.textContent = numPlayerResult;
    } else if ((playRound(getComputerChoice(), "rock")) == 'You Lose!') {
        numPcResult++;
        pcResult.textContent = numPcResult;
    } else {
        // nothing to done!
    }

    isDone();
});

paper.addEventListener('click', function (e) {
    console.log(playRound(getComputerChoice(), "paper"));
    if ((playRound(getComputerChoice(), "paper")) == 'You Win!') {
        numPlayerResult++;
        playerResult.textContent = numPlayerResult;
    } else if ((playRound(getComputerChoice(), "paper")) == 'You Lose!') {
        numPcResult++;
        pcResult.textContent = numPcResult;
    } else {
        // nothing to done!
    }

    isDone();
});

scissors.addEventListener('click', function (e) {
    console.log(playRound(getComputerChoice(), "scissors"));
    if ((playRound(getComputerChoice(), "scissors")) == 'You Win!') {
        numPlayerResult++;
        playerResult.textContent = numPlayerResult;
    } else if ((playRound(getComputerChoice(), "scissors")) == 'You Lose!') {
        numPcResult++;
        pcResult.textContent = numPcResult;
    } else {
        // nothing to done!
    }

    isDone();
});

