import { isArrayEqual } from './util.ts';

type GameGrid = [
  GridValue,
  GridValue,
  GridValue,
  GridValue,
  GridValue,
  GridValue,
  GridValue,
  GridValue,
  GridValue,
];

export type PlayerSymbol = 'x' | 'o';
type GridValue = PlayerSymbol | null;

type WinningIndexes = [number, number, number];
const winningIndexes: Array<WinningIndexes> = [
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

export const xSymbol: PlayerSymbol = 'x';
export const oSymbol: PlayerSymbol = 'o';

export type GameState = {
  grid: GameGrid;
  currentTurn: PlayerSymbol | null;
  winner: PlayerSymbol | null;
};

export function createInitialGameState(): GameState {
  return {
    grid: [null, null, null, null, null, null, null, null, null],
    currentTurn: xSymbol,
    winner: null,
  };
}

export function playAMove(gameState: GameState, index: number): GameState {
  const newGrid = gameState.grid.with(index, gameState.currentTurn) as GameGrid;
  const winner = playerHasWon(newGrid, gameState.currentTurn)
    ? gameState.currentTurn
    : null;
  const nextTurnSymbol = gameState.currentTurn === xSymbol ? oSymbol : xSymbol;
  const nextTurn =
    !winner && canSwitchTurn(newGrid, nextTurnSymbol) ? nextTurnSymbol : null;

  return {
    grid: newGrid,
    currentTurn: nextTurn,
    winner: winner,
  };
}

export function playerHasWon(
  grid: GameGrid,
  currentTurn: PlayerSymbol | null,
): boolean {
  const playerIndexes = grid.reduce<Array<number>>(
    (accumulator, currentValue, index) =>
      currentValue === currentTurn ? [...accumulator, index] : accumulator,
    [],
  );
  const hasWinningState = winningIndexes.some((winningState) =>
    isArrayEqual(winningState, playerIndexes),
  );

  return hasWinningState;
}

export function canSwitchTurn(
  grid: GameGrid,
  currentTurn: PlayerSymbol | null,
): boolean {
  const nrOfPlayedForTurnType = grid.filter(
    (gridValue: GridValue) => gridValue === currentTurn,
  ).length;

  return nrOfPlayedForTurnType < maxTurnsPerPlayer;
}
