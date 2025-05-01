const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Score
let score = 0;

// Game objects
let paddleHeight = 80;
let paddleWidth = 10;
let playerY = canvas.height / 2 - paddleHeight / 2;
let aiY = canvas.height / 2 - paddleHeight / 2;
let ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 8,
  speedX: 4,
  speedY: 4,
};

function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function drawCircle(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
}

function drawNet() {
  for (let i = 0; i < canvas.height; i += 20) {
    drawRect(canvas.width / 2 - 1, i, 2, 10, "white");
  }
}

function draw() {
  // Clear
  drawRect(0, 0, canvas.width, canvas.height, "black");

  ctx.fillStyle = "white";
  ctx.font = "32px Arial";
  ctx.fillText(score, 0, 0);

  drawNet();
  drawRect(0, playerY, paddleWidth, paddleHeight, "white");
  drawRect(canvas.width - paddleWidth, aiY, paddleWidth, paddleHeight, "white");
  drawCircle(ball.x, ball.y, ball.radius, "white");
}

function update() {
  // Move ball
  ball.x += ball.speedX;
  ball.y += ball.speedY;

  // Wall collision
  if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height)
    ball.speedY *= -1;

  // Paddle collision (Player)
  if (
    ball.x - ball.radius < paddleWidth &&
    ball.y > playerY &&
    ball.y < playerY + paddleHeight
    score = score + 1
  ) {
    ball.speedX *= -1;
  }

  // Paddle collision (AI)
  if (
    ball.x + ball.radius > canvas.width - paddleWidth &&
    ball.y > aiY &&
    ball.y < aiY + paddleHeight
  ) {
    ball.speedX *= -1;
  }

  // AI movement
  let aiCenter = aiY + paddleHeight / 2;
  if (aiCenter < ball.y) aiY += 3;
  else aiY -= 3;

  // Score reset
  if (ball.x < 0 || ball.x > canvas.width) {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.speedX *= -1;
  }
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

document.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  playerY = e.clientY - rect.top - paddleHeight / 2;
});

gameLoop();
