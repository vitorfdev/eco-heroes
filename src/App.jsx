import config from './assets/img/config.svg';
import sound from './assets/img/sound.svg';
import exit from './assets/img/exit.svg';
import background from './assets/img/background.png';
import { Points } from './components/Points';
import { Nav } from './components/Nav';
import { Menu } from './components/Menu';
import { LevelBar } from './components/LevelBar';
import { UpgradesTab } from './components/UpgradesTab';
import { Enemy } from './components/Enemy';

export const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
      className="bg-cover bg-center h-screen w-screen flex flex-row relative"
    >
      <h1 className="absolute text-9xl font-bold outline text-white text-opacity-50 self-center mx-96">
        EM PRODUCAO
      </h1>
      <div className="w-1/3 flex flex-col justify-between h-full">
        <Points />
        <div className="h-auto">
          <Nav />
          <UpgradesTab />
        </div>
      </div>
      <div className="w-2/3 h-full flex justify-around relative">
        <div className="w-auto flex items-center flex-col justify-between">
          <LevelBar />
          <Enemy />
        </div>
        <div>
          <div className="absolute top-0 right-0 flex flex-col space-y-4 m-4">
            <Menu type={config} />
            <Menu type={sound} />
            <Menu type={exit} />
          </div>
        </div>
      </div>
    </div>
  );
};
