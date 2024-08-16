import type { BoardProps } from 'boardgame.io/react';

import { CellProps, GameState } from '@/interfaces';
import { MINES } from '@/constants';
import Cell from '@/components/Cell';
import Settings from '@/components/Settings';
import useTime from '@/hooks/useTime';

export default function Board({ G, moves }: BoardProps<GameState>) {
  const handleClick = (id: number) => moves.clickCell(id);
  const time = useTime();

  const handleReset = () => {
    console.log('resetting...');
  };

  return (
    <div className="flex min-h-screen bg-theme-dark-200">
      <div className="flex-[1] bg-theme-light-100">
        <Settings handleReset={handleReset} />
      </div>
      <div className="relative flex flex-[4] flex-col items-center bg-theme-indigo-100 p-4">
        <time className="absolute left-2 top-2 text-theme-light-100">{time}</time>
        <h1 className="flex justify-center text-8xl font-bold uppercase -tracking-widest text-theme-light-100">
          {MINES}
        </h1>
        <ul className="grid grid-cols-5 gap-2 p-8">
          {G.cells.map((cell: CellProps, id: number) => (
            <Cell {...cell} key={`cell-${id}`} onClick={() => handleClick(id)} />
          ))}
        </ul>
      </div>
    </div>
  );
}
