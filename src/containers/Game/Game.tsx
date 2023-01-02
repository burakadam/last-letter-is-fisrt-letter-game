import { Listener } from '@/components/Listener';
import { Speaker } from '@/components/Speaker';

const Game = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center p-10">
      <Speaker />
      <Listener />
    </div>
  );
};

export { Game };
