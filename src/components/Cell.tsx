import { CellProps } from '@/interfaces';
import { MINE, MINE_IMAGE_SRC, TREASURE, TREASURE_IMAGE_SRC } from '@/constants.ts';

export default function Cell({ value, isRevealed, onClick = () => {} }: CellProps) {
  const imageSrc = value === TREASURE ? TREASURE_IMAGE_SRC : MINE_IMAGE_SRC;
  const imageAlt = value === TREASURE ? TREASURE : MINE;

  return (
    <div
      className={`${isRevealed && 'revealed'} relative aspect-square h-36 w-36 cursor-pointer rounded flip-card`}
      onClick={onClick}>
      <div className="rounded shadow-md shadow-theme-dark-200 flip-card__inner">
        <div className="bg-theme-indigo-200 flip-card__side"></div>
        <div className="overflow-hidden rounded flip-card__side flip-card__back">
          <img className="h-full w-full object-cover" src={imageSrc} alt={imageAlt} />
        </div>
        <div className="absolute inset-0 rounded bg-black/10 hover:bg-black/5"></div>
      </div>
    </div>
  );
}
