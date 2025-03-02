const gameContainer = document.getElementById('game-container');
const player = document.getElementById('player');
const scoreboard = document.getElementById('score');
let score = 0;
let gameOver = false;

// Player Movement
document.addEventListener('keydown', (event) => {
  const playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
  if (event.key === 'ArrowLeft' && playerLeft > 0) {
    player.style.left = playerLeft - 20 + 'px';
  } else if (event.key === 'ArrowRight' && playerLeft < 360) {
    player.style.left = playerLeft + 20 + 'px';
  }
});

// Create Falling Objects
function createFallingObject() {
  if (gameOver) return;

  const fallingObject = document.createElement('div');
  fallingObject.classList.add('falling-object');
  fallingObject.style.left = Math.floor(Math.random() * 360) + 'px';
  gameContainer.appendChild(fallingObject);

  let fallingInterval = setInterval(() => {
    const objectTop = parseInt(window.getComputedStyle(fallingObject).getPropertyValue('top'));
    const objectLeft = parseInt(window.getComputedStyle(fallingObject).getPropertyValue('left'));
    const playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    const playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));

    // Collision Detection
    if (
      objectTop > 540 &&
      objectTop < 600 &&
      objectLeft > playerLeft - 40 &&
      objectLeft < playerLeft + 40
    ) {
      alert('Game Over! Your Score: ' + score);
      clearInterval(fallingInterval);
      gameOver = true;
      location.reload(); // Restart the game
    }

    // Remove object if it goes out of bounds
    if (objectTop >= 600) {
      fallingObject.remove();
      score++;
      scoreboard.textContent = score;
    } else {
      fallingObject.style.top = objectTop + 5 + 'px';
    }
  }, 30);

  // Create the next object after a random delay
  setTimeout(createFallingObject, Math.random() * 1000 + 500);
}

// Start Game
createFallingObject();
