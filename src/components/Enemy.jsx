import React from 'react';
import tony from '../assets/img/tony.png';

export const Enemy = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-white text-8xl font-bold uppercase">Toninho</h1>
      <img src={tony} alt="Enemy Image" />
      <div className="w-full h-8 rounded-lg outline bg-yellow-300 flex justify-center mb-8">
        <div className="size-12 rounded-full bg-yellow-300 outline z-10 flex justify-center items-center text-4xl">
          ⚡
        </div>
      </div>
    </div>
  );
};
