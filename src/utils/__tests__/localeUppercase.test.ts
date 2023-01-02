import { _localeUppercase } from '../localeUppercase';

describe('make string uppercase with app default language', () => {
  it('return İDİL from given İdil string', () => {
    expect(_localeUppercase('İdil')).toEqual('İDİL');
  });
});
