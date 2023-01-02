import { useEffect } from 'react';

import { DEFAULT_LANGUAGE } from '@/constants/language';
import { SPEAK_RATE } from '@/constants/speak';
import { gameActions, gameSelectors } from '@/store/game';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { _hostFindText } from '@/utils/hostFindText';

const synth = window.speechSynthesis || window.webkitSpeechRecognition;

const Speaker = () => {
  const dispatch = useAppDispatch();

  const playerTurn = useAppSelector(gameSelectors.playerTurn);
  const isSpeaking = useAppSelector(gameSelectors.isSpeaking);
  const activeHostAnswer = useAppSelector(gameSelectors.activeHostAnswer);
  const activeGuestAnswer = useAppSelector(gameSelectors.activeGuestAnswer);
  const answeredList = useAppSelector(gameSelectors.answeredList);

  useEffect(() => {
    if (playerTurn === 'host' && !isSpeaking && activeGuestAnswer !== null) {
      try {
        const answer = _hostFindText(answeredList, activeGuestAnswer);

        if (!answer) {
          dispatch(
            gameActions.setResultText({ text: 'Bilgisayar bir isim bulamadı.' })
          );
          dispatch(gameActions.resetToResult());
        } else {
          dispatch(gameActions.setGuestActiveAnswer({ answer: null }));

          const utterance = new SpeechSynthesisUtterance(answer);

          utterance.lang = DEFAULT_LANGUAGE;
          utterance.rate = SPEAK_RATE;

          synth.speak(utterance);

          utterance.onstart = () => {
            dispatch(gameActions.setHostActiveAnswer({ answer }));
            dispatch(gameActions.startSpeaking());
          };
          utterance.onend = () => {
            dispatch(gameActions.stopSpeaking());
            dispatch(gameActions.setPlayerTurn({ turn: 'guest' }));
            dispatch(gameActions.updateAnsweredList({ answer }));
            dispatch(gameActions.updateHostAnswers({ answer }));
          };
        }
      } catch (error) {
        dispatch(gameActions.stopSpeaking());
        dispatch(gameActions.errorSpeaking({ error: String(error) }));
      }
    }
  }, [activeGuestAnswer, dispatch, answeredList, isSpeaking, playerTurn]);

  return (
    <>
      <h1
        className={`mb-4 font-bold text-lg ${
          playerTurn === 'host' ? 'text-red-600' : ''
        }`}
      >
        Benim sıram
      </h1>
      <p className="uppercase bg-green-400 p-2 text-white font-bold text-center mb-4 w-auto">
        {activeHostAnswer ? activeHostAnswer : '....'}
      </p>
      <div className="w-[200px] h-1 bg-slate-500 my-4" />
    </>
  );
};

export { Speaker };
