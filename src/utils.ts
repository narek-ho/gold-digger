import { CellProps } from '@/interfaces';

export function initCells(totalCount: number, minesCount: number): CellProps[] {
  const cells: CellProps[] = Array.from({ length: totalCount }, () => ({
    isRevealed: false,
    value: 'TREASURE'
  }));

  // randomly place mines
  for (let i = 0; i < minesCount; i++) {
    let randomId: number;
    do {
      randomId = Math.floor(Math.random() * totalCount);
    } while (cells[randomId].value !== 'TREASURE');
    cells[randomId].value = 'MINE';
  }

  return cells;
}

export function getCurrentTime() {
  const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
  return new Date().toLocaleTimeString('en-UK', timeOptions);
}
