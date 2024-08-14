import { twMerge } from 'tailwind-merge';

import { CellProps } from '../interfaces.ts';

export default function Cell({ value, isRevealed, onClick }: CellProps) {
  return <div
    className={twMerge('rounded flex aspect-[4/5] items-center justify-center bg-theme-indigo-2 shadow-md shadow-theme-dark-1',
      isRevealed && value === 'MINE' && 'bg-red-700',
      isRevealed && value === 'TREASURE' && 'bg-theme-teal-1')}
    onClick={onClick}>{value}</div>;
}