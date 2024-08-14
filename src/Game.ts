import { Client } from 'boardgame.io/react';

import { GoldDigger } from '@/GoldDigger';
import Board from '@/components/Board';

const Game = Client({ game: GoldDigger, board: Board, numPlayers: 1 });

export default Game;
