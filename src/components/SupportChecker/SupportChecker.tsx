import { ISupportChecker } from '.';

declare global {
  interface Window {
    SpeechRecognition?: any;
    webkitSpeechRecognition?: any;
  }
}

const synth = window.speechSynthesis;

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const SupportChecker = ({ children }: ISupportChecker) => {
  if (synth && speechRecognition) return <div>{children}</div>;
  return (
    <div className="w-screen h-screen flex justify-center items-center p-10">
      <p className="text-red-500 text-center">
        Tarayıcınız güncel ses ve mikrofon kütüphanelerini desteklemiyor. Lütfen
        daha güncel bir sürüm ile tekrar deneyiniz.
      </p>
    </div>
  );
};
export { SupportChecker };
