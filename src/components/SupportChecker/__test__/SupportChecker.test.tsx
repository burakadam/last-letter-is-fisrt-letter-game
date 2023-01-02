import { render } from '@/utils/testUtils';

import { SupportChecker } from '../SupportChecker';

describe('render if browser supports SpeechRecognition or speechSynthesis', () => {
  it('render component correctly', () => {
    const { container } = render(<SupportChecker>App content</SupportChecker>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
