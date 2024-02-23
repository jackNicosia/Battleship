import { Ai } from "../src/ai";
import { Gameboard } from "../src/gameboard";

describe("Ai functionality", () => {
  let ai, gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
    ai = new Ai(gameboard);
  });

  test("Ai generates moves within gameboard bounds", () => {
    const { x, y } = ai.generateRandomMove();
    expect(x).toBeGreaterThanOrEqual(0);
    expect(x).toBeLessThan(gameboard.size);
    expect(y).toBeGreaterThanOrEqual(0);
    expect(y).toBeLessThan(gameboard.size);
  });

  test("Ai does not repeat moves", () => {
    const moves = new Set();
    const totalMoves = gameboard.size * gameboard.size;

    for (let i = 0; i < totalMoves; i++) {
      const { x, y } = ai.generateRandomMove();
      const moveKey = `${x},${y}`;
      moves.add(moveKey);
    }
    // Optionally, test that the AI stops making moves once all possible moves are exhausted
    expect(moves.size).toBe(gameboard.size * gameboard.size);
  });
});
