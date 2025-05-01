document.addEventListener("DOMContentLoaded", () => {
  let score = 0;
  const circle = document.getElementById("circle");
  const scoreDisplay = document.getElementById("score");
  const gameArea = document.getElementById("game-area");

  circle.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
  });
});
