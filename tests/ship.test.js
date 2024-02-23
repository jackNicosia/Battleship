import { Ship } from "../src/ship";

test("ship initializes with correct size", () => {
  const ship = new Ship(5);
  expect(ship.size).toBe(5);
});

test("hit function increases hits value", () => {
  const ship = new Ship(3);
  ship.hit();
  expect(ship.hits).toBe(1);
});

test("ship is sunk when hits is >= size", () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();

  expect(ship.isSunk()).toBe(true);
});
