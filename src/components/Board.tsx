import type { BoardProps } from 'boardgame.io/react';

import { CellProps, GameState } from '@/interfaces';
import { MINES } from '@/constants';
import Cell from '@/components/Cell';
import Settings from '@/components/Settings';
import useTime from '@/hooks/useTime';

export default function Board({ G, ctx, moves }: BoardProps<GameState>) {
  // const [time, setTime] = useState<string>();
  const handleClick = (id: number) => moves.clickCell(id);
  const time = useTime();

  const handleReset = () => {
    console.log('resetting...');
  };

  return (
    <div className="bg-theme-dark-200 flex min-h-screen">
      <div className="bg-theme-light-100 flex-[1]">
        <Settings handleReset={handleReset} />
      </div>
      <div className="bg-theme-indigo-100 relative flex flex-[4] flex-col items-center p-4">
        <time className="text-theme-light-100 absolute left-2 top-2">{time}</time>
        <h1 className="text-theme-light-100 flex justify-center text-8xl font-bold uppercase -tracking-widest">
          {MINES}
        </h1>
        <ul className="grid w-1/2 grid-cols-5 gap-2 p-8">
          {G.cells.map((cell: CellProps, id: number) => (
            <Cell {...cell} key={`cell-${id}`} onClick={() => handleClick(id)} />
          ))}
        </ul>
      </div>
    </div>
  );
}
