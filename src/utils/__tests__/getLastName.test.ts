import { _getLastName } from '../getLastName';

describe('returns last word of a sentence', () => {
  it('returns Say from Fazıl Say', () => {
    expect(_getLastName('Fazıl Say')).toBe('Say');
  });

  it('returns empty string from an empty string', () => {
    expect(_getLastName('')).toBe('');
  });
});
