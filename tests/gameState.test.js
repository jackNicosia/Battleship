import { Player } from "../src/player";
import { gameState, playerAttack } from "../src/gameState";

// Mock a simple GameBoard class
class GameBoard {
  receiveAttack({ x, y }) {
    // Simplified example: Assume any attack to (0,0) is a hit, others are miss
    return x === 0 && y === 0;
  }
}

describe("Player and game logic", () => {
  let player1, player2;

  beforeEach(() => {
    // Reset game state and players before each test
    gameState.currentPlayer = "Player 1";
    player1 = new Player("Player 1", new GameBoard());
    player2 = new Player("Player 2", new GameBoard());
    gameState.players["Player 1"] = player1;
    gameState.players["Player 2"] = player2;
  });

  test("Player 1's attack hits and switches turn to Player 2", () => {
    playerAttack(gameState, "Player 1", 0, 0); // Should hit
    expect(gameState.currentPlayer).toBe("Player 2");
  });

  test("Player 2's attack misses and switches turn back to Player 1", () => {
    playerAttack(gameState, "Player 1", 0, 0); // Player 1 hits, switching to Player 2
    playerAttack(gameState, "Player 2", 1, 1); // Should miss
    expect(gameState.currentPlayer).toBe("Player 1");
  });

  test("Attack out of turn should not switch player", () => {
    expect(() => {
      playerAttack(gameState, "Player 2", 0, 0).toThrow("It's not your turn");
    });
  });
});
