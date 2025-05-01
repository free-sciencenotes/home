document.addEventListener("DOMContentLoaded", () => {
  let score = 0;
  const circle = document.getElementById("circle");
  const scoreDisplay = document.getElementById("score");
  const gameArea = document.getElementById("game-area");

  circle.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;

    const areaWidth = gameArea.clientWidth;
    const areaHeight = gameArea.clientHeight;

    const x = Math.random() * (areaWidth - 100);
    const y = Math.random() * (areaHeight - 100);

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
  });
});
