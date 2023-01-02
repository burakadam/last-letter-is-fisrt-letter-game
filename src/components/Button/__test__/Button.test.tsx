import { render } from '@/utils/testUtils';

import { Button } from '../Button';

describe('render simple button', () => {
  it('render component correctly', () => {
    const { container } = render(
      <Button onClick={() => {}}>Simple Button</Button>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
