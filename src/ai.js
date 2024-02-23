class Ai {
  constructor(gameboard) {
    this.gameboard = gameboard;
    this.attempts = new Set(); // Store attempted coordinates as a string to ensure uniqueness
  }

  generateRandomMove() {
    let x, y;
    do {
      x = Math.floor(Math.random() * this.gameboard.size); // Assuming gameboard has a 'size' property
      y = Math.floor(Math.random() * this.gameboard.size);
    } while (this.attempts.has(`${x},${y}`)); // Keep generating until a unique move is found

    this.attempts.add(`${x},${y}`); // Mark this move as attempted
    return { x, y };
  }

  attackOpponent(opponentGameboard) {
    const { x, y } = this.generateRandomMove();
    return opponentGameboard.receiveAttack({ x, y });
  }
}

export { Ai };
