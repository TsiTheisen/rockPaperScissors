const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  //menu fade
  const startGame = () => {
    const start = document.querySelector(".start");
    const startButton = document.querySelector(".startButton");
    const match = document.querySelector(".match");

    startButton.addEventListener("click", () => {
      start.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  startGame();
  playGame();
  updateScore();
};

const playGame = () => {
  const options = document.querySelectorAll(".buttons button");
  const playerHand = document.querySelector(".playerHand");
  const computerHand = document.querySelector(".computerHand");

  // computer's options
  const computerOptions = ["rock", "paper", "scissors"];

  options.forEach((option) => {
    option.addEventListener("click", function () {
      const computerMath = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[computerMath];

      playerHand.src = `.assets/${playerHand.textContent}.png`;
      computerHand.src = `./assets/${computerOptions.textContent}.png`;
    });
  });
};
const comparePlay = (playerHand, computerHand) => {
  const winner = document.querySelector(outcome);
// Win or lose
  if (playerHand === computerHand) {
    winner.textContent = "It's a tie!";
    return;
  }
  if (playerHand === "rock") {
    if (computerHand === "scissors") {
      winner.textContent = "Player Wins!";
      return;
    } else {
      winner.textContent = "Computer wins!";
      return;
    }
  }

  if (playerHand === "paper") {
    if (computerHand === "rock") {
      winner.textContent = "Player Wins!";
      return;
    } else {
      winner.textContent = "Computer wins!";
      return;
    }
  }

  if (playerHand === "scissors") {
    if (computerHand === "paper") {
      winner.textContent = "Player Wins!";
      return;
    } else {
      winner.textContent = "Computer wins!";
      return;
    }
  }
};
game();
comparePlay();
