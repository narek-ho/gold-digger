import { MINE_OPTIONS, CUSTOM, NUMBER_OF_MINES, RESET } from '@/constants.ts';
// import { useState } from 'react';

// interface MinesConfig {
//   id: number;
//   count: number;
// }

export default function Settings({ handleReset = () => {} }) {
  // const [minesConfig, setMinesConfig] = useState<MinesConfig>({ id: 1, count: 3 });
  //
  // const handleMinesConfigButtonClick = ({ id, count }: MinesConfig) => {
  //   setMinesConfig({ id: id, count: count });
  // };

  return (
    <div className="bg-theme-dark-200 text-theme-light-100 flex h-full min-h-screen flex-col gap-2 p-1 pr-2">
      <div className="bg-theme-dark-100 flex flex-1 flex-col rounded p-2">
        <h1 className="text">{NUMBER_OF_MINES}</h1>
        <div className="flex gap-[1px] overflow-hidden rounded text-xs font-bold">
          {MINE_OPTIONS.map(m => (
            <button className="bg-theme-teal-100 px-4 py-2 text-black" key={`mine-option-${m}`}>
              {m}
            </button>
          ))}
          <input className="flex flex-1 px-2" type="text" placeholder={CUSTOM} />
        </div>
        Under development
        <div
          className="bg-theme-teal-100 flex cursor-pointer items-center justify-center rounded-3xl py-2 font-bold text-black"
          onClick={handleReset}>
          {RESET}
        </div>
      </div>
      <div className="bg-theme-dark-100 flex items-center justify-around rounded p-2">demo balance</div>
      <div className="bg-theme-dark-100 flex items-center justify-around rounded p-2">
        <div className="p-1">sound</div>
        <div className="p-1">music</div>
        <div className="p-1">info</div>
        <div className="p-1">home</div>
      </div>
    </div>
  );
}
