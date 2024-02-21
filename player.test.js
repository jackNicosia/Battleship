const { Gameboard } = require("./gameboard");
const { Player } = require("./player");

describe("Player tests", () => {
  test("Players take turns after taking shots", () => {
    const gameboard1 = new Gameboard();
    const player1 = new Player("Jack", gameboard1);
    player1.attackOpponent({ x: 5, y: 4 });
    expect(player1.isTurn).toBe(false);
  });
});
