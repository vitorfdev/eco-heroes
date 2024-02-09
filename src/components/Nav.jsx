import React from 'react';
import upgrade from '../assets/img/upgrade.svg';
import heart from '../assets/img/heart.svg';
import book from '../assets/img/book.svg';
import dpc from '../assets/img/dpc.svg';
import dps from '../assets/img/dps.svg';

export const Nav = () => {
  return (
    <div className="bg-gray-400 w-3/4 rounded-tr-full flex items-end h-16">
      <div className="flex items-end gap-2 h-full mx-2">
        <button className="bg-gray-300 h-14 rounded-t-lg">
          <img src={upgrade} alt="Upgrade Button" className="h-14 w-14 p-2" />
        </button>
        <button className="bg-gray-700 h-14 rounded-t-lg">
          <img src={heart} alt="Donation Button" className="h-14 w-14 p-2" />
        </button>
        <button className="bg-gray-700 h-14 rounded-t-lg">
          <img src={book} alt="Learn Button" className="h-14 w-14 p-2" />
        </button>
      </div>
      <div className="flex flex-col justify-end items-start h-full">
        <div className="flex items-center">
          <img src={dpc} alt="" className="size-6" />
          <p className="text-gray-100 text-lg">DPC 9999</p>
        </div>
        <div className="flex items-center">
          <img src={dps} alt="" className="size-6" />
          <p className="text-gray-100 text-lg">DPS 9999</p>
        </div>
      </div>
    </div>
  );
};
