const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");

//get all the possible choices
const possibleChoices = document.querySelectorAll("button");
let playerChoice;
let computerChoice;
let result;

possibleChoices.forEach((posibleChoice) =>
  posibleChoice.addEventListener("click", (event) => {
    // console.log(posibleChoice.id);
    playerChoice = posibleChoice.id;
    playerChoiceDisplay.innerHTML = playerChoice;

    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length); //3,from 1 to 3
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "scissors";
  } else {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}
function getResult() {
  if (computerChoice === playerChoice) {
    result = "its a draw!";
  } else if (
    (computerChoice === "rock" && playerChoice === "paper") ||
    (computerChoice === "paper" && playerChoice === "scissors") ||
    (computerChoice === "scissors" && playerChoice === "rock")
  ) {
    result = "you won!";
  } else {
    result = "you lose!";
  }

  resultDisplay.innerHTML = result;
}
