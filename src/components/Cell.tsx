import { CellProps } from '@/interfaces';
import { MINE_IMAGE_SRC, TREASURE_IMAGE_SRC } from '@/constants.ts';

export default function Cell({ value, isRevealed, onClick }: CellProps) {
  return (
    <div className="bg-theme-indigo-200 shadow-theme-dark-100 aspect-[4/5] rounded shadow-md" onClick={onClick}>
      {isRevealed && value === 'TREASURE' && (
        <img className="h-full w-full object-cover" src={TREASURE_IMAGE_SRC} alt="treasure" />
      )}
      {isRevealed && value === 'MINE' && <img className="h-full w-full object-cover" src={MINE_IMAGE_SRC} alt="mine" />}
    </div>
  );
}
