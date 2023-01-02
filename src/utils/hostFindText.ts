import NAMES from '@/data/names.json';
import { _addPercentageOfFailer } from './addPercentageOfFailer';
import { _localeUppercase } from './localeUppercase';

// NOTE: look what said before and then check if valid after this function
export const _hostFindText = (
  saidList: string[],
  activeText: string | null
) => {
  let names = NAMES;

  if (activeText) {
    const lastLetter = _localeUppercase(activeText).charAt(
      activeText.length - 1
    );

    const filteredWithFirstLetter = NAMES.filter((name) =>
      _localeUppercase(name).startsWith(lastLetter)
    );

    if (!filteredWithFirstLetter) return '';

    const withoutSaidBefore = filteredWithFirstLetter.filter(
      (name) => !saidList.includes(name)
    );

    names =
      saidList.length > 3
        ? _addPercentageOfFailer(withoutSaidBefore)
        : filteredWithFirstLetter;
  }

  return names[Math.floor(Math.random() * names.length)];
};
