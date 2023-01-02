import { _checkGuestAnswer } from '../checkGuestAnswer';

const WITHOUT_ANSWER_RESPONSE = { success: false, text: 'Cavap veremedin' };
const WRONG_FIRSTLETTER_RESPONSE = {
  success: false,
  text: `Verdiğin cevap "N" harfiyle başlamıyor`,
};
const ANSWER_IS_SAID_BEFORE = {
  success: false,
  text: `BURAK ismini daha önce söylemiştin`,
};
const SUCCESS_VALIDATION = {
  success: true,
  text: 'Başarılı',
};

describe('validate user answer with computer answer, what user said before and what user asnwer before', () => {
  it('return success false and said you did not answer', () => {
    expect(_checkGuestAnswer(null, 'Burak', [])).toEqual(
      WITHOUT_ANSWER_RESPONSE
    );
  });

  it('return success false and said your answer does not start with letter N', () => {
    expect(_checkGuestAnswer('Burak', 'adnan', [])).toEqual(
      WRONG_FIRSTLETTER_RESPONSE
    );
  });

  it('return success false and said you said the answer before', () => {
    expect(_checkGuestAnswer('Burak', 'sertab', ['Burak', 'Emre'])).toEqual(
      ANSWER_IS_SAID_BEFORE
    );
  });

  it('return success true and said success', () => {
    expect(_checkGuestAnswer('Burak', 'sertab', ['İpek', 'Emre'])).toEqual(
      SUCCESS_VALIDATION
    );
  });
});
