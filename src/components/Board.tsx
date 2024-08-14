import type { BoardProps } from 'boardgame.io/react';

import { CellProps, GameState } from '@/interfaces';
import { MINES } from '@/constants';
import Cell from '@/components/Cell';
import Settings from '@/components/Settings';
import useTime from '@/hooks/useTime';

export default function Board({ G, moves }: BoardProps<GameState>) {
  // const [time, setTime] = useState<string>();
  const handleClick = (id: number) => moves.clickCell(id);
  const time = useTime();

  return (
    <div className="flex">
      <div className="flex-[1]">
        <Settings />
      </div>
      <div className="relative flex flex-[4] flex-col items-center bg-gray-800 p-8">
        <time className="text-theme-light-100 absolute left-2 top-2">{time}</time>
        <h1 className="text-theme-light-100 flex justify-center text-8xl font-bold uppercase -tracking-widest">
          {MINES}
        </h1>
        <ul className="grid w-4/5 grid-cols-5 gap-2 p-8">
          {G.cells.map((cell: CellProps, id: number) => (
            <Cell {...cell} key={`cell-${id}`} onClick={() => handleClick(id)} />
          ))}
        </ul>
      </div>
    </div>
  );
}
