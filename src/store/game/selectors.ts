import { REDUCERS } from '@/constants/reducers';

import { RootState } from '../store';

const selectGame = (state: RootState) => state[REDUCERS.GAME];

const gameStage = (state: RootState) => selectGame(state).gameStage;
const playerTurn = (state: RootState) => selectGame(state).playerTurn;

const isSpeaking = (state: RootState) => selectGame(state).isSpeaking;
const activeHostAnswer = (state: RootState) =>
  selectGame(state).activeHostAnswer;
const hostAnswers = (state: RootState) => selectGame(state).hostAnswers;
const speakingError = (state: RootState) => selectGame(state).errors.speaking;

const isListening = (state: RootState) => selectGame(state).isListening;
const activeGuestAnswer = (state: RootState) =>
  selectGame(state).activeGuestAnswer;
const questAnswers = (state: RootState) => selectGame(state).questAnswers;
const listeningError = (state: RootState) => selectGame(state).errors.listening;

const answeredList = (state: RootState) => selectGame(state).answeredList;
const resultText = (state: RootState) => selectGame(state).resultText;

export const gameSelectors = {
  gameStage,
  playerTurn,
  isSpeaking,
  activeHostAnswer,
  hostAnswers,
  speakingError,
  isListening,
  activeGuestAnswer,
  questAnswers,
  listeningError,
  answeredList,
  resultText,
};
