import React from 'react';

export const LevelSelector = ({ direction }) => {
  return (
    <button className="bg-gray-300 rounded-full flex justify-center items-center size-12 outline inset-y-0 z-10 my-2">
      <img src={direction} alt="" className="size-4" />
    </button>
  );
};
