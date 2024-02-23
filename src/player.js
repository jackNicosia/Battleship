class Player {
  constructor(name, gameboard) {
    this.name = name;
    this.gameboard = gameboard;
  }

  attackOpponent(opponentGameboard, x, y) {
    return opponentGameboard.receiveAttack({ x, y });
  }
}

export { Player };
