import coin from './assets/img/coin.svg';
import upgrade from './assets/img/upgrade.svg';
import heart from './assets/img/heart.svg';
import book from './assets/img/book.svg';
import dpc from './assets/img/dpc.svg';
import dps from './assets/img/dps.svg';
import upgradeIcon from './assets/img/upgrade-icon.svg';
import shop from './assets/img/shop.svg';
import left from './assets/img/left.svg';
import level from './assets/img/level.svg';
import right from './assets/img/right.svg';
import config from './assets/img/config.svg';
import sound from './assets/img/sound.svg';
import exit from './assets/img/exit.svg';

export const App = () => {
  return (
    <div className="bg-[url('./src/assets/img/background.png')] bg-cover bg-center h-screen w-screen flex flex-row relative">
      <h1 className="absolute text-9xl font-bold outline text-white text-opacity-50 self-center mx-96">
        EM PRODUCAO
      </h1>
      <div className="w-1/3 flex flex-col justify-between h-auto">
        <div className="w-3/4 h-16 rounded-lg flex justify-start items-center bg-gray-300 outline outline-gray-700 outline-3 mx-auto my-4">
          <img src={coin} alt="Coin Symbol" className="w-16" />
          <p className="text-4xl text-gray-700 font-medium">999999</p>
        </div>

        <div className="h-auto">
          <div className="bg-gray-400 w-3/4 rounded-tr-full flex items-end h-16">
            <div className="flex items-end gap-2 h-full mx-2">
              <button className="bg-gray-300 h-14 rounded-t-lg">
                <img
                  src={upgrade}
                  alt="Upgrade Button"
                  className="h-14 w-14 p-2"
                />
              </button>
              <button className="bg-gray-700 h-14 rounded-t-lg">
                <img
                  src={heart}
                  alt="Donation Button"
                  className="h-14 w-14 p-2"
                />
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
          <div className="flex bg-gray-300 h-96 rounded-tr-lg">
            <div className="w-full p-4 overflow-y-scroll space-y-4">
              <div className="bg-gray-700 h-24 flex items-center justify-between p-2 rounded-lg">
                <div className="bg-gray-300 size-20 flex items-center justify-center outline outline-black rounded-lg">
                  <img
                    src={upgradeIcon}
                    alt="Upgrade Image"
                    className="size-14"
                  />
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
              <div className="bg-gray-700 h-24 flex items-center justify-between p-2 rounded-lg">
                <div className="bg-gray-300 size-20 flex items-center justify-center outline outline-black rounded-lg">
                  <img
                    src={upgradeIcon}
                    alt="Upgrade Image"
                    className="size-14"
                  />
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
              <div className="bg-gray-700 h-24 flex items-center justify-between p-2 rounded-lg">
                <div className="bg-gray-300 size-20 flex items-center justify-center outline outline-black rounded-lg">
                  <img
                    src={upgradeIcon}
                    alt="Upgrade Image"
                    className="size-14"
                  />
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
              <div className="bg-gray-700 h-24 flex items-center justify-between p-2 rounded-lg">
                <div className="bg-gray-300 size-20 flex items-center justify-center outline outline-black rounded-lg">
                  <img
                    src={upgradeIcon}
                    alt="Upgrade Image"
                    className="size-14"
                  />
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
              <div className="bg-gray-700 h-24 flex items-center justify-between p-2 rounded-lg">
                <div className="bg-gray-300 size-20 flex items-center justify-center outline outline-black rounded-lg">
                  <img
                    src={upgradeIcon}
                    alt="Upgrade Image"
                    className="size-14"
                  />
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
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 h-full flex flex-col">
        <div className="w-auto flex items-center">
          <div className="w-auto flex relative justify-between items-center">
            <button className="bg-gray-300 rounded-full flex justify-center items-center size-12 outline absolute inset-y-0 left-0 my-2">
              <img src={left} alt="" className="size-4" />
            </button>
            <div className="w-auto flex bg-gray-300 py-2 px-10 rounded-lg outline space-x-4 mx-8">
              <button className="size-14 bg-gray-300 flex items-center justify-center rounded-lg outline">
                <img src={level} alt="Level Image" className="size-12" />
              </button>
              <button className="size-14 bg-gray-300 flex items-center justify-center rounded-lg outline">
                <img src={level} alt="Level Image" className="size-12" />
              </button>
              <button className="size-14 bg-gray-300 flex items-center justify-center rounded-lg outline">
                <img src={level} alt="Level Image" className="size-12" />
              </button>
              <button className="size-14 bg-gray-300 flex items-center justify-center rounded-lg outline">
                <img src={level} alt="Level Image" className="size-12" />
              </button>
              <button className="size-14 bg-gray-300 flex items-center justify-center rounded-lg outline">
                <img src={level} alt="Level Image" className="size-12" />
              </button>
            </div>
            <button className="bg-gray-300 rounded-full flex justify-center items-center size-12 outline absolute inset-y-0 right-0 my-2">
              <img src={right} alt="" className="size-4" />
            </button>
          </div>
          <div>
            <button>
              <img src={config} alt="" className="size-12" />
            </button>
            <button>
              <img src={sound} alt="" className="size-12" />
            </button>
            <button>
              <img src={exit} alt="" className="size-12" />
            </button>
          </div>
        </div>
        <div>
          <h1>teste</h1>
        </div>
      </div>
    </div>
  );
};
