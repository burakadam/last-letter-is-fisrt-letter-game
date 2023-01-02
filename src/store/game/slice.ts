import { createSlice } from '@reduxjs/toolkit';

import { REDUCERS } from '@/constants/reducers';
import { IGameState } from '.';

export const initialState: IGameState = {
  gameStage: 'beggining',
  playerTurn: 'host',
  isStarted: false,
  isSpeaking: false,
  isListening: false,
  hostAnswers: [],
  activeHostAnswer: '',
  questAnswers: [],
  activeGuestAnswer: '',
  answeredList: [],
  resultText: '',
  errors: {
    listening: null,
    speaking: null,
  },
};

const gameSlice = createSlice({
  name: REDUCERS.GAME,
  initialState,
  reducers: {
    startGame(state) {
      state.gameStage = 'game';
    },
    endGame(state) {
      state.gameStage = 'result';
    },
    startSpeaking(state) {
      state.isSpeaking = true;
    },
    stopSpeaking(state) {
      state.isSpeaking = false;
    },
    errorSpeaking(state, action) {
      state.errors.speaking = action.payload.error;
    },
    setHostActiveAnswer(state, action) {
      state.activeHostAnswer = action.payload.answer;
      state.isSpeaking = false;
    },
    updateHostAnswers(state, action) {
      state.hostAnswers = [...state.hostAnswers, action.payload.answer];
    },
    setPlayerTurn(state, action) {
      state.playerTurn = action.payload.turn;
    },
    startListening(state) {
      state.isListening = true;
    },
    stopListening(state) {
      state.isListening = false;
    },
    errorListening(state, action) {
      state.errors.listening = action.payload.error;
    },
    setGuestActiveAnswer(state, action) {
      state.activeGuestAnswer = action.payload.answer;
      state.isListening = false;
    },
    updateGuestAnswers(state, action) {
      state.questAnswers = [...state.questAnswers, action.payload.answer];
    },
    updateAnsweredList(state, action) {
      state.answeredList = [...state.answeredList, action.payload.answer];
    },
    setResultText(state, action) {
      state.resultText = action.payload.text;
    },
    resetToResult(state) {
      state.gameStage = 'result';
      state.playerTurn = null;
      state.isStarted = false;
      state.isSpeaking = false;
      state.isListening = false;
      state.activeHostAnswer = '';
      state.activeGuestAnswer = '';
      state.errors = {
        listening: null,
        speaking: null,
      };
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
