import upgradeIcon from '../assets/img/upgrade-icon.svg';
import shop from '../assets/img/shop.svg';
import React from 'react';

export const Upgrade = () => {
  return (
    <div className="bg-gray-700 h-24 flex items-center justify-between p-2 rounded-lg">
      <div className="bg-gray-300 size-20 flex items-center justify-center outline outline-black rounded-lg">
        <img src={upgradeIcon} alt="Upgrade Image" className="size-14" />
      </div>
      <div className="w-1/2">
        <h1 className="text-white font-bold text-xl">Teste</h1>
        <p className="text-white text-base font-normal">Teste</p>
        <span className="text-white text-sm">LVL. 32</span>
      </div>
      <div className="bg-gray-300 size-16 flex items-center justify-center outline outline-black rounded-lg">
        <img src={shop} alt="Shop Button" className="size-12" />
      </div>
    </div>
  );
};
