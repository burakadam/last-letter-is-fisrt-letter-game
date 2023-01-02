import { gameSelectors } from '@/store/game';
import { useAppSelector } from '@/store/hooks';

import { Begining } from '../Begining';
import { Game } from '../Game';
import { Result } from '../Result';

const Main = () => {
  const gameStage = useAppSelector(gameSelectors.gameStage);

  return (
    <div>
      {gameStage === 'beggining' && <Begining />}
      {gameStage === 'game' && <Game />}
      {gameStage === 'result' && <Result />}
    </div>
  );
};

export { Main };
