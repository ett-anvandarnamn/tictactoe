import { isArrayEqual } from "./util.js";
const winningIndexes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const maxTurnsPerPlayer = 3;
export const xSymbol = 'x';
export const oSymbol = 'o';
export function createInitialGameState() {
    return {
        grid: [null, null, null, null, null, null, null, null, null],
        currentTurn: xSymbol,
        winner: null,
    };
}
export function playAMove(gameState, index) {
    const newGrid = gameState.grid.with(index, gameState.currentTurn);
    const winner = playerHasWon(newGrid, gameState.currentTurn)
        ? gameState.currentTurn
        : null;
    const nextTurnSymbol = gameState.currentTurn === xSymbol ? oSymbol : xSymbol;
    const nextTurn = !winner && canSwitchTurn(newGrid, nextTurnSymbol) ? nextTurnSymbol : null;
    return {
        grid: newGrid,
        currentTurn: nextTurn,
        winner: winner,
    };
}
export function playerHasWon(grid, currentTurn) {
    const playerIndexes = grid.reduce((accumulator, currentValue, index) => currentValue === currentTurn ? [...accumulator, index] : accumulator, []);
    const hasWinningState = winningIndexes.some((winningState) => isArrayEqual(winningState, playerIndexes));
    return hasWinningState;
}
export function canSwitchTurn(grid, currentTurn) {
    const nrOfPlayedForTurnType = grid.filter((gridValue) => gridValue === currentTurn).length;
    return nrOfPlayedForTurnType < maxTurnsPerPlayer;
}
