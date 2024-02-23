import { Gameboard } from "./gameboard";
import { Player } from "./player";

let gameState = {
  currentPlayer: "Player 1",
  players: {
    "Player 1": new Player("Player 1", new Gameboard()),
    "Player 2": new Player("Player 2", new Gameboard()),
  },
};

function switchTurns(state) {
  state.currentPlayer =
    state.currentPlayer === "Player 1" ? "Player 2" : "Player 1";
}

function playerAttack(state, playerName, x, y) {
  if (state.currentPlayer !== playerName) {
    throw new Error("It's not your turn");
  }

  const opponentName = Object.keys(state.players).find(
    (name) => name !== playerName
  );
  const opponent = state.players[opponentName];

  const result = state.players[playerName].attackOpponent(
    opponent.gameboard,
    x,
    y
  );
  console.log(result ? "Attack successful" : "Attack failed");

  switchTurns(state);
}

export { gameState, playerAttack };
