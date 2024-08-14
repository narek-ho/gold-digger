import type { BoardProps } from 'boardgame.io/react';

import { CellProps, GameState } from '../interfaces';
import { MINES } from '../constants.ts';
import Cell from './Cell';

export default function Board({ G, moves }: BoardProps<GameState>) {
  const handleClick = (id: number) => moves.clickCell(id);
  return (
    <div className="p-8 bg-gray-800">
      <h1 className="text-8xl -tracking-widest text-theme-light-1 font-bold uppercase flex justify-center">{MINES}</h1>
      <ul className="grid grid-cols-5 gap-2 mt-8">
        {G.cells.map((cell: CellProps, id: number) => (
          <Cell {...cell} key={`cell-${id}`} onClick={() => handleClick(id)} />))}
      </ul>
    </div>
  );
}