class Player {
  constructor(name, gameboard) {
    this.name = name;
    this.gameboard = gameboard;
    this.isTurn = true;
  }

  attackOpponent(x, y) {
    if (!this.isTurn) {
      console.log("Not your turn");
      return false;
    }
    this.isTurn = false;
    return this.gameboard.receiveAttack({ x, y });
  }
}

module.exports = { Player };
