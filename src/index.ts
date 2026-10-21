import { createInitialGameState, GameState, playAMove } from './tic-tac-toe.ts';
import {
  disableGridButtons,
  showCurrentTurnSection,
  hideCurrentTurnSection,
  hideEndGameSection,
  showWinSection,
  showDrawSection,
  setupGridButtons,
  markGridButtonAsPlayed,
  updateStatusText,
} from './view.ts';

let gameState: GameState;

function setupInitialGameState(): void {
  gameState = createInitialGameState();

  setupGridButtons();
  showCurrentTurnSection();
  hideEndGameSection();
  updateStatusText(gameState.currentTurn ?? 'x', 'o');
}

function handleGridButtonClick(e: Event): void {
  const clickedButton = e.target;

  if (clickedButton && clickedButton instanceof Element) {
    const clickedIndex = parseInt(
      clickedButton.getAttribute('data-index') ?? '',
    );
    const turnBeforeMove = gameState.currentTurn ?? 'x';

    markGridButtonAsPlayed(clickedButton, turnBeforeMove);

    gameState = playAMove(gameState, clickedIndex);

    if (gameState.winner) {
      disableGridButtons();
      hideCurrentTurnSection();
      showWinSection(gameState.winner);
    } else if (gameState.currentTurn && turnBeforeMove) {
      updateStatusText(gameState.currentTurn, turnBeforeMove);
    } else {
      // No current turn or winner, i.e. we have a draw
      showDrawSection();
      hideCurrentTurnSection();
      disableGridButtons();
    }
  }
}

function handlePlayAgainClick(): void {
  setupInitialGameState();
}

function handleCloseClick(): void {
  const main = document.getElementById('main');
  if (main) {
    main.style.backgroundColor = 'black';
    main.style.display = 'flex';
  }

  const background = document.getElementById('background');
  background?.classList.add('hidden');

  const shutDownLine = document.getElementById('shut-down');
  shutDownLine?.classList.remove('hidden');
}

const gridButtons = document.querySelectorAll('.grid-button');
gridButtons.forEach((button) =>
  button.addEventListener('click', handleGridButtonClick),
);

const playAgainButton = document.getElementById('play-again-button');
playAgainButton?.addEventListener('click', handlePlayAgainClick);

const closeButton = document.getElementById('close-button');
closeButton?.addEventListener('click', handleCloseClick);

setupInitialGameState();
