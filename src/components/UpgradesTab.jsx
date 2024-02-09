import React from 'react';
import { Upgrade } from './Upgrade';

export const UpgradesTab = () => {
  return (
    <div className="flex bg-gray-300 h-96 rounded-tr-lg">
      <div className="w-full p-4 overflow-y-scroll space-y-4">
        <Upgrade />
        <Upgrade />
        <Upgrade />
        <Upgrade />
        <Upgrade />
        <Upgrade />
        <Upgrade />
        <Upgrade />
      </div>
    </div>
  );
};
