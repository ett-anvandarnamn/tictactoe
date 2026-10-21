import { xSymbol, oSymbol } from "./tic-tac-toe.js";
export function hideCurrentTurnSection() {
    const currentTurnWrapper = document.getElementById('turn-output');
    currentTurnWrapper?.classList.add('hidden');
}
export function showCurrentTurnSection() {
    const currentTurnWrapper = document.getElementById('turn-output');
    currentTurnWrapper?.classList.remove('hidden');
}
export function hideEndGameSection() {
    const endGameWrapper = document.getElementById('end-game-output');
    endGameWrapper?.classList.add('hidden');
    const winMessage = document.getElementById('win-message');
    winMessage?.classList.add('hidden');
    winMessage?.classList.remove(xSymbol);
    winMessage?.classList.remove(oSymbol);
    const drawMessage = document.getElementById('draw-message');
    drawMessage?.classList.add('hidden');
}
export function showWinSection(winner) {
    const endGameOutput = document.getElementById('end-game-output');
    endGameOutput?.classList.remove('hidden');
    const winMessage = document.getElementById('win-message');
    winMessage?.classList.remove('hidden');
    winMessage?.classList.add(winner);
}
export function showDrawSection() {
    const endGameOutput = document.getElementById('end-game-output');
    endGameOutput?.classList.remove('hidden');
    const drawMessage = document.getElementById('draw-message');
    drawMessage?.classList.remove('hidden');
}
export function disableGridButtons() {
    const buttons = document.querySelectorAll('.grid-button');
    buttons.forEach((button) => {
        button.disabled = true;
    });
}
export function setupGridButtons() {
    const gridButtons = document.querySelectorAll('.grid-button');
    gridButtons.forEach((button) => {
        button.disabled = false;
        button.children[0].classList.remove('o-played');
        button.children[0].classList.remove('x-played');
    });
}
export function markGridButtonAsPlayed(clickedButton, playedSymbol) {
    clickedButton.children[0].classList.add(playedSymbol + '-played');
    clickedButton.disabled = true;
}
export function updateStatusText(currentTurn, otherTurn) {
    const statusTextCurrent = document.getElementById('turn-text-' + otherTurn);
    statusTextCurrent?.classList.add('hidden');
    const statusTextNext = document.getElementById('turn-text-' + currentTurn);
    statusTextNext?.classList.remove('hidden');
}
