import { gameActions } from '@/store/game';
import { useAppDispatch } from '@/store/hooks';

import { Button } from '@/components/Button';
import { Layout } from '@/components/Layout';

const Begining = () => {
  const dispatch = useAppDispatch();

  const handleStartButton = () => dispatch(gameActions.startGame());

  return (
    <Layout>
      <p>Oyun, ismin son harfinden yeni bir isim türeterek oynanıyor.</p>
      <br />
      <Button onClick={handleStartButton}>Oyuna Başla!</Button>
    </Layout>
  );
};

export { Begining };
