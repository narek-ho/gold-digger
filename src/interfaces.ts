import { MouseEventHandler } from 'react';

import { CellValue } from '@/types';

export interface GameState {
  cells: CellProps[];
  winsCount: number;
}

export interface GameConfig {
  CELLS_COUNT: number;
  MINES_COUNT: number;
}

export interface CellProps {
  value: CellValue;
  isRevealed: boolean;

  onClick?: MouseEventHandler<HTMLElement>;
}
