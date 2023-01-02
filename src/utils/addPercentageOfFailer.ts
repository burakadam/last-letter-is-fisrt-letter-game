import { FAILER_PERCENTAGE } from '@/constants/failer';

// NOTE: shorstest way i found is to give 30% of failer chance is craete an array that has 30% of empty string

export const _addPercentageOfFailer = (list: string[]) => {
  const totalNumberOfEmptyArray = Math.floor(
    (list.length / (100 - FAILER_PERCENTAGE)) * FAILER_PERCENTAGE
  );

  const emptyArray = Array.from({ length: totalNumberOfEmptyArray }, () => '');

  const result = [...list, ...emptyArray];

  return result;
};
