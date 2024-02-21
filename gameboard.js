class Gameboard {
  constructor() {
    this.board = {};
    this.missedShots = [];
    this.livesLeft = 0;
  }

  placeShip(ship, startPosition, orientation) {
    this.livesLeft += ship.size;
    for (let i = 0; i < ship.size; i++) {
      const x = startPosition.x + (orientation === "horizontal" ? i : 0);
      const y = startPosition.y + (orientation === "vertical" ? i : 0);

      if (x < 1 || x > 10 || y < 1 || y > 10) {
        throw new Error("Outside of gameboard");
      }
      const key = `${x},${y}`;
      if (this.board[key]) {
        throw new Error("Ships cannot overlap");
      }
      this.board[key] = ship;
    }
  }

  hasShipAt(position) {
    const key = `${position.x},${position.y}`;
    return !!this.board[key];
  }

  receiveAttack(position) {
    const key = `${position.x},${position.y}`;
    if (this.board[key]) {
      this.board[key].hit();
      this.livesLeft -= 1;
      if (this.livesLeft >= 0) {
        return "GAME OVER";
      }
      return true;
    } else {
      this.missedShots.push(position);
      return false;
    }
  }
}
module.exports = { Gameboard };
