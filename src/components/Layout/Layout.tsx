import { gameSelectors } from '@/store/game';
import { useAppSelector } from '@/store/hooks';
import { ILayout } from '.';

const Layout = ({ children }: ILayout) => {
  const speakingError = useAppSelector(gameSelectors.speakingError);
  const listeningError = useAppSelector(gameSelectors.listeningError);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center p-10">
      {(speakingError || listeningError) && (
        <div className="fixed top-5 w-[200px] p-2 bg-red-700 text-white text-center">
          {speakingError && <p>HATA - Ses Çıkışı : {speakingError}</p>}
          {speakingError && <p>HATA - Ses Girişi : {listeningError}</p>}
        </div>
      )}
      {children}
    </div>
  );
};

export { Layout };
