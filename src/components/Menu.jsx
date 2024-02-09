import React from 'react';

export const Menu = ({ type }) => {
  return (
    <button className="size-14 bg-gray-300 flex items-center justify-center rounded-lg outline">
      <img src={type} alt="" className="size-12" />
    </button>
  );
};
