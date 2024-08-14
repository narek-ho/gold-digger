import { Game } from 'boardgame.io';
import { INVALID_MOVE } from 'boardgame.io/core';

import { GAME_CONFIG } from '@/constants';
import { GameState } from '@/interfaces';
import { initCells } from '@/utils';

export const GoldDigger: Game<GameState> = {
  setup: () => ({ cells: initCells(GAME_CONFIG.CELLS_COUNT, GAME_CONFIG.MINES_COUNT), winsCount: 0 }),

  moves: {
    clickCell: ({ G }, id) => {
      if (G.cells[id].isRevealed === true) {
        return INVALID_MOVE;
      }

      G.cells[id].isRevealed = true;

      if (G.cells[id].value === 'TREASURE') {
        G.winsCount++;
      }

      // if (G.cells[id].type === 'MINE') {
      //   events.endGame();
      // }
    }
  },

  turn: { minMoves: 1, maxMoves: 1 },

  endIf: ({ G }) => {
    G.cells.some(c => c.isRevealed && c.value === 'MINE');
  }
};
