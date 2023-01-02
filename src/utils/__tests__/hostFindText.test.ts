import { _hostFindText } from '../hostFindText';

import NAMES from '@/data/names.json';

const SAID_BEFORE = NAMES.filter(
  (name) => name.startsWith('a') && name !== 'ayaba'
);

describe('find answer from names.json randomly and validate it', () => {
  it('find a random name from names.json', () => {
    expect(_hostFindText([], null)).toEqual(expect.any(String));
  });

  it('find a random name from names.json starts with B', () => {
    expect(_hostFindText([], 'Sertab').startsWith('b')).toBe(true);
  });

  it('find a random name from names.json starts with A and not from answers said before, should retun ayaba', () => {
    expect(_hostFindText(SAID_BEFORE, 'Kaya')).toEqual('ayaba');
  });
});
