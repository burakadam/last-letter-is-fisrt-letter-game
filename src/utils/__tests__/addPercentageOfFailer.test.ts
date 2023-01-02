import { _addPercentageOfFailer } from '../addPercentageOfFailer';

const TEST_ARRAY = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

describe('adds 30% percent of more empty strings to array given', () => {
  it('return an array length is 10', () => {
    expect(_addPercentageOfFailer(TEST_ARRAY)).toHaveLength(10);
  });

  it('return an array equals with given', () => {
    expect(_addPercentageOfFailer(TEST_ARRAY)).toEqual([
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      '',
      '',
      '',
    ]);
  });
});
