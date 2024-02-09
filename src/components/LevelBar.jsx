import React from 'react';
import left from '../assets/img/left.svg';
import right from '../assets/img/right.svg';
import { Level } from './Level';
import { LevelSelector } from './LevelSelector';

export const LevelBar = () => {
  return (
    <div>
      <div className="w-auto flex bg-gray-300 py-2 rounded-lg outline space-x-4 px-4 mt-4">
        <LevelSelector direction={left} />
        <Level />
        <Level />
        <Level />
        <Level />
        <Level />
        <LevelSelector direction={right} />
      </div>
      <div className="flex justify-between">
        <p className="text-white font-bold text-2xl underline">Floresta</p>
        <p className="text-white font-bold text-2xl underline">Estágio 8/10</p>
      </div>
    </div>
  );
};
