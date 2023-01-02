import { useCallback, useEffect } from 'react';

import { DEFAULT_LANGUAGE } from '@/constants/language';
import { DELAY_AFTER_GUEST_ANSWER } from '@/constants/time';
import { gameActions, gameSelectors } from '@/store/game';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { _checkGuestAnswer } from '@/utils/checkGuestAnswer';
import { _getLastName } from '@/utils/getLastName';
import { Timer } from '../Timer';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const Listener = () => {
  const dispatch = useAppDispatch();

  const playerTurn = useAppSelector(gameSelectors.playerTurn);
  const isListening = useAppSelector(gameSelectors.isListening);
  const activeHostAnswer = useAppSelector(gameSelectors.activeHostAnswer);
  const activeGuestAnswer = useAppSelector(gameSelectors.activeGuestAnswer);
  const answeredList = useAppSelector(gameSelectors.answeredList);

  const handleTimeUp = useCallback(() => {
    dispatch(
      gameActions.setResultText({ text: 'Belirlen sürede cevap veremedin' })
    );
    dispatch(gameActions.resetToResult());
  }, [dispatch]);

  useEffect(() => {
    if (playerTurn === 'guest' && !isListening && activeHostAnswer !== null) {
      try {
        let recognition = new SpeechRecognition();

        recognition.lang = DEFAULT_LANGUAGE;
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.start();

        dispatch(gameActions.startListening());

        recognition.onresult = (result: any) => {
          const answer = _getLastName(result?.results[0][0].transcript) ?? null;

          dispatch(gameActions.setGuestActiveAnswer({ answer }));

          const { success, text } = _checkGuestAnswer(
            answer,
            activeHostAnswer,
            answeredList
          );

          if (success) {
            dispatch(gameActions.updateAnsweredList({ answer }));
            dispatch(gameActions.updateGuestAnswers({ answer }));
            dispatch(gameActions.stopListening());

            setTimeout(() => {
              dispatch(gameActions.setPlayerTurn({ turn: 'host' }));
              dispatch(gameActions.setHostActiveAnswer({ answer: null }));
            }, DELAY_AFTER_GUEST_ANSWER);
          } else {
            dispatch(gameActions.stopListening());

            setTimeout(() => {
              dispatch(gameActions.setResultText({ text }));
              dispatch(gameActions.resetToResult());
            }, DELAY_AFTER_GUEST_ANSWER);
          }
        };
      } catch (error) {
        dispatch(gameActions.stopListening());
        dispatch(gameActions.errorListening({ error: String(error) }));
      }
    }
  }, [
    activeHostAnswer,
    dispatch,
    answeredList,
    handleTimeUp,
    isListening,
    playerTurn,
  ]);

  return (
    <div>
      <div className="text-center">
        <h1
          className={`mb-4 font-bold text-lg ${
            playerTurn === 'guest' ? 'text-red-600' : ''
          }`}
        >
          Senin sıran
        </h1>
        {playerTurn === 'guest' && (
          <p className="uppercase bg-yellow-400 p-2 text-white font-bold text-center mb-4">
            {activeGuestAnswer ? activeGuestAnswer : '...dinliyorum'}
          </p>
        )}
        {isListening && !activeGuestAnswer && <Timer onTimeUp={handleTimeUp} />}
      </div>
    </div>
  );
};

export { Listener };
