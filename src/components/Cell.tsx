import { twMerge } from 'tailwind-merge';

import { CellProps } from '@/interfaces';

export default function Cell({ value, isRevealed, onClick }: CellProps) {
  return (
    <div
      className={twMerge(
        'bg-theme-indigo-200 shadow-theme-dark-100 flex aspect-[4/5] items-center justify-center rounded shadow-md',
        isRevealed && value === 'MINE' && 'bg-red-700',
        isRevealed && value === 'TREASURE' && 'bg-theme-teal-100'
      )}
      onClick={onClick}>
      {value}
    </div>
  );
}
