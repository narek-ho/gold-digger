import { GameConfig } from '@/interfaces';

export const MINES: string = 'MINES';
export const MINE: string = 'MINE';
export const TREASURE: string = 'TREASURE';
export const EMPTY = 'EMPTY';
export const CUSTOM = 'CUSTOM';
export const NUMBER_OF_MINES = 'NUMBER OF MINES';
export const RESET = 'RESET';

export const ONE_MINUTE_IN_MILLISECONDS = 1000 * 15;

export const TREASURE_IMAGE_SRC = './treasure.webp';
export const MINE_IMAGE_SRC = './mine.webp';

export const GAME_CONFIG: GameConfig = { CELLS_COUNT: 25, MINES_COUNT: 3 };

export const MINE_OPTIONS = [1, 3, 5, 7];
