import { PlayerSymbol, xSymbol, oSymbol } from './tic-tac-toe.ts';

export function hideCurrentTurnSection(): void {
  const currentTurnWrapper = document.getElementById('turn-output');
  currentTurnWrapper?.classList.add('hidden');
}

export function showCurrentTurnSection(): void {
  const currentTurnWrapper = document.getElementById('turn-output');
  currentTurnWrapper?.classList.remove('hidden');
}

export function hideEndGameSection(): void {
  const endGameWrapper = document.getElementById('end-game-output');
  endGameWrapper?.classList.add('hidden');

  const winMessage = document.getElementById('win-message');
  winMessage?.classList.add('hidden');
  winMessage?.classList.remove(xSymbol);
  winMessage?.classList.remove(oSymbol);

  const drawMessage = document.getElementById('draw-message');
  drawMessage?.classList.add('hidden');
}

export function showWinSection(winner: PlayerSymbol): void {
  const endGameOutput = document.getElementById('end-game-output');
  endGameOutput?.classList.remove('hidden');

  const winMessage = document.getElementById('win-message');
  winMessage?.classList.remove('hidden');
  winMessage?.classList.add(winner);
}

export function showDrawSection(): void {
  const endGameOutput = document.getElementById('end-game-output');
  endGameOutput?.classList.remove('hidden');

  const drawMessage = document.getElementById('draw-message');
  drawMessage?.classList.remove('hidden');
}

export function disableGridButtons(): void {
  const buttons = document.querySelectorAll('.grid-button');
  buttons.forEach((button) => {
    (button as HTMLButtonElement).disabled = true;
  });
}

export function setupGridButtons(): void {
  const gridButtons = document.querySelectorAll('.grid-button');
  gridButtons.forEach((button: Element) => {
    (button as HTMLButtonElement).disabled = false;
    button.children[0].classList.remove('o-played');
    button.children[0].classList.remove('x-played');
  });
}

export function markGridButtonAsPlayed(
  clickedButton: Element,
  playedSymbol: PlayerSymbol,
): void {
  clickedButton.children[0].classList.add(playedSymbol + '-played');
  (clickedButton as HTMLButtonElement).disabled = true;
}

export function updateStatusText(
  currentTurn: PlayerSymbol,
  otherTurn: PlayerSymbol,
): void {
  const statusTextCurrent = document.getElementById('turn-text-' + otherTurn);
  statusTextCurrent?.classList.add('hidden');

  const statusTextNext = document.getElementById('turn-text-' + currentTurn);
  statusTextNext?.classList.remove('hidden');
}
