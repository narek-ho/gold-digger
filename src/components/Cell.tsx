import { CellProps } from '@/interfaces';
import { MINE, MINE_IMAGE_SRC, TREASURE, TREASURE_IMAGE_SRC } from '@/constants.ts';

export default function Cell({ value, isRevealed, onClick = () => {} }: CellProps) {
  const imageSrc = value === TREASURE ? TREASURE_IMAGE_SRC : MINE_IMAGE_SRC;
  const imageAlt = value === TREASURE ? TREASURE : MINE;

  return (
    <div
      className={`${isRevealed && 'revealed'} flip-card shadow-theme-dark-100 relative aspect-[4/5] rounded-l shadow-md`}
      onClick={onClick}>
      <div className="flip-card__inner">
        <div className="flip-card__side bg-theme-indigo-200"></div>
        <div className="flip-card__side flip-card__back">
          <img className="h-full w-full object-cover" src={imageSrc} alt={imageAlt} />
        </div>
        <div className="absolute inset-0 bg-black/10 hover:bg-black/5"></div>
      </div>
    </div>
  );
}
