// Variables declaration
var p1Score = 0;
var p2Score = 0;
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var p1Value = document.getElementById("p1score");
var p2Value = document.getElementById("p2score");
var reset = document.getElementById("reset");
var winningScoreDisplay = document.querySelector("p span");
var winningScore = 5;
var numInput = document.getElementsByTagName("input")[0];
var hasWon = false;

//Player 1 score Increement

p1Button.addEventListener("click", function () {
  if (!hasWon) {
    p1Score++;
    p1Value.textContent = p1Score;
    if (p1Score === winningScore) {
      hasWon = true;
      p1Value.classList.add("green");
    }
  }
});

// Player 2 Score Increement

p2Button.addEventListener("click", function () {
  if (!hasWon) {
    p2Score++;
    p2Value.textContent = p2Score;
    if (p2Score === winningScore) {
      hasWon = true;
      p2Value.classList.add("green");
    }
  }
});

// Both Player's score reset function

reset.addEventListener("click", function () {
  resetValue();
});

function resetValue() {
  p1Score = 0;
  p2Score = 0;
  p1Value.textContent = p1Score;
  p2Value.textContent = p2Score;
  p2Value.classList.remove("green");
  p1Value.classList.remove("green");
  hasWon = false;
}
// Input from user

numInput.addEventListener("change", function () {
  winningScoreDisplay.textContent = this.value;
  winningScore = this.valueAsNumber;
  resetValue();
});
