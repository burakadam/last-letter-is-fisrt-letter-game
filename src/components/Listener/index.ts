export interface IVoiceRecognitionResult {
  distance: number;
  recognitionResult: string;
  textToRecognize: string;
}

export * from './Listener';
