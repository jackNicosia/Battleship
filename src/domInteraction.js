// Define the function to dynamically generate the grid cells
function createGameboard(gameboardEl, cellClickedCallback) {
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const cell = document.createElement("div");
      cell.dataset.x = x;
      cell.dataset.y = y;
      cell.classList.add("cell"); // Adding a class for styling
      cell.addEventListener("click", () => cellClickedCallback(x, y));
      gameboardEl.appendChild(cell);
    }
  }
}

// Function to initialize the gameboard and handle cell clicks.
// This function setups up the gameboard and defines what happens when a cell is clicked.
function initializeGameboard() {
  const playerGameboard = document.getElementById("playerGameboard");
  const enemyGameboard = document.getElementById("enemyGameboard");

  // Define what happens when a cell is clicked.
  // This function will need to integrate with your game's logic to handle the click event properly.
  function cellClicked(x, y) {
    console.log(`Cell clicked: (${x}, ${y})`);
    // Here you would call your game logic function, e.g., handleAttack(x, y);
  }

  // Call createGameboard to setup the gameboard on page load or game start
  createGameboard(playerGameboard, cellClicked);
  createGameboard(enemyGameboard, cellClicked);
}

export { createGameboard, initializeGameboard };
