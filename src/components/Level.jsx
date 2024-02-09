import React from 'react';
import level from '../assets/img/level.svg';

export const Level = () => {
  return (
    <button className="size-14 bg-gray-300 flex items-center justify-center rounded-lg outline">
      <img src={level} alt="Level Image" className="size-12" />
    </button>
  );
};
