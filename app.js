const game = () => {
  let pScore = 0;
  let cScore = 0;
  //menu fade
  const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const startButton = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      startButton.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const playGame = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".playerHand");
    const computerChoice = document.querySelector(".computerHand");
    const hands = document.querySelectorAll(".hands img")
    // computer's options
    const computerOptions = ["rock", "paper", "scissors"];
    options.forEach(option => {
      option.addEventListener("click", function () {
        const computerMath = Math.floor(Math.random() * 3);
        const computerHand = computerOptions[computerMath];
        compareHands(this.textContent, computerHand);
        console.log(computerMath);
      });
    });
  };
  const updateScore = () => {
    const playerScore = document.querySelector(".pScore");
    const computerScore = document.querySelector(".cScore");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

  };
  const compareHands = (playerChoice, computerHand) => {
    const winner = document.querySelector(".winner");
    // Win or lose
    if (playerChoice === computerHand) {
      winner.textContent = "It's a tie!";
      return;
    };
    if (playerChoice === "rock") {
      if (computerHand === "scissors") {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer wins!";
        cScore++;
        updateScore();
        return;
      }
    }

    if (playerChoice === "paper") {
      if (computerHand === "rock") {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer wins!";
        cScore++;
        updateScore();
        return;
      }
    }

    if (playerChoice === "scissors") {
      if (computerHand === "paper") {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer wins!";
        cScore++;
        updateScore();
        return;
      }
    }
  };
  startGame();
  playGame();
};
game();