const { Gameboard } = require("./gameboard");
const { Ship } = require("./ship");

describe("Gameboard", () => {
  test("Can place a ship at specific coordinates", () => {
    const gameboard = new Gameboard();
    const destroyer = new Ship(2);
    gameboard.placeShip(destroyer, { x: 2, y: 3 }, "horizontal");
    expect(gameboard.hasShipAt({ x: 2, y: 3 })).toBe(true);
    expect(gameboard.hasShipAt({ x: 3, y: 3 })).toBe(true);
  });
  test("Ships cant overlap", () => {
    const gameboard = new Gameboard();
    const tiny = new Ship(8);
    const titanic = new Ship(2);
    gameboard.placeShip(tiny, { x: 2, y: 7 }, "horizontal");
    expect(() => {
      gameboard.placeShip(titanic, { x: 4, y: 6 }, "vertical");
    }).toThrow("Ships cannot overlap");
  });
  test("Ship cannot be placed at cordinates greater than 10", () => {
    const gameboard = new Gameboard();
    const destroyer = new Ship(4);
    expect(() => {
      gameboard.placeShip(destroyer, { x: 11, y: 12 }, "horizontal");
    }).toThrow("Outside of gameboard");
  });
  test("Ship cannot be placed at cordinates less than 1", () => {
    const gameboard = new Gameboard();
    const destroyer = new Ship(4);
    expect(() => {
      gameboard.placeShip(destroyer, { x: -1, y: 0 }, "vertical");
    }).toThrow("Outside of gameboard");
  });

  test("Ship cannot extend off the board", () => {
    const gameboard = new Gameboard();
    const destroyer = new Ship(4);
    expect(() => {
      gameboard.placeShip(destroyer, { x: 9, y: 9 }, "vertical");
    }).toThrow("Outside of gameboard");
  });

  test("receiveAttack determines whether or not the attack hit a ship", () => {
    const gameboard = new Gameboard();
    const destroyer = new Ship(4);
    gameboard.placeShip(destroyer, { x: 2, y: 3 }, "horizontal");
    gameboard.receiveAttack({ x: 2, y: 3 });
    expect(destroyer.hits).toBe(1);
  });

  test("receiveAttack triggers the hit function to the correct ship", () => {
    const gameboard = new Gameboard();
    const destroyer = new Ship(4);
    const tiny = new Ship(5);
    gameboard.placeShip(tiny, { x: 5, y: 5 }, "horizontal");
    gameboard.placeShip(destroyer, { x: 2, y: 3 }, "vertical");
    gameboard.receiveAttack({ x: 2, y: 3 });
    expect(tiny.hits).toBe(0);
  });
  test("the reeiveAttack function records coordinates of missed shots", () => {
    const gameboard = new Gameboard();
    gameboard.receiveAttack({ x: 5, y: 5 });
    // gameboard.receiveAttack({ x: 6, y: 6 });
    expect(gameboard.missedShots).toEqual([{ x: 5, y: 5 }]);
  });

  test("gameboard reports when all ships have been sunk", () => {
    const gameboard = new Gameboard();
    const destroyer = new Ship(2);
    gameboard.placeShip(destroyer, { x: 2, y: 3 }, "horizontal");
    gameboard.receiveAttack({ x: 2, y: 3 });
    gameboard.receiveAttack({ x: 3, y: 3 });
    expect(gameboard.livesLeft).toBe(0);
  });
});
