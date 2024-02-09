import React from 'react';
import coin from '../assets/img/coin.svg';

export const Points = () => {
  return (
    <div className="w-3/4 h-16 rounded-lg flex justify-start items-center bg-gray-300 outline outline-gray-700 outline-3 mx-auto my-4">
      <img src={coin} alt="Coin Symbol" className="w-16" />
      <p className="text-4xl text-gray-700 font-medium">999999</p>
    </div>
  );
};
