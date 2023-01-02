import NAMES from '@/data/names.json';
import { _localeUppercase } from './localeUppercase';

interface ICheckGuestAnswer {
  success: boolean;
  text: string;
}

export const _checkGuestAnswer = (
  guestAsnwer: string | null,
  hostAsnwer: string,
  answeredList: string[]
): ICheckGuestAnswer => {
  if (!guestAsnwer) return { success: false, text: 'Cavap veremedin' };

  const hostLastLetter = _localeUppercase(hostAsnwer).charAt(
    hostAsnwer.length - 1
  );

  const guestFirstLetter = _localeUppercase(guestAsnwer).charAt(0);

  if (guestFirstLetter !== hostLastLetter)
    return {
      success: false,
      text: `Verdiğin cevap "${hostLastLetter}" harfiyle başlamıyor`,
    };

  const isSaidBefore = answeredList.find(
    (name) => _localeUppercase(name) === _localeUppercase(guestAsnwer)
  );

  if (isSaidBefore)
    return {
      success: false,
      text: `${_localeUppercase(guestAsnwer)} ismini daha önce söylemiştin`,
    };

  const questAnswerIsAName = NAMES.filter(
    (name) => _localeUppercase(name) === _localeUppercase(guestAsnwer)
  );

  return {
    success: questAnswerIsAName.length > 0,
    text: 'Başarılı',
  };
};
