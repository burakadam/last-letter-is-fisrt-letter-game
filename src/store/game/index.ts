export interface IErrors {
  listening: string | null;
  speaking: string | null;
}

export interface IGameState {
  gameStage: 'beggining' | 'game' | 'result';
  playerTurn: 'guest' | 'host' | null;
  isStarted: boolean;
  isSpeaking: boolean;
  isListening: boolean;
  hostAnswers: string[];
  activeHostAnswer: string;
  questAnswers: string[];
  activeGuestAnswer: string;
  answeredList: string[];
  resultText: string;
  errors: IErrors;
}

export * from './selectors';
export * from './slice';
export { default as gameReducer } from './slice';
