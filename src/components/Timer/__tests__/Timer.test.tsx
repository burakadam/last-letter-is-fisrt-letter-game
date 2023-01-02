import { render } from '@/utils/testUtils';

import { Timer } from '../Timer';

jest.setTimeout(10000);

describe('render a timer end in 8 seconds', () => {
  it('render component', () => {
    const { container } = render(<Timer onTimeUp={() => {}} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('call function after 8 seconds', async () => {
    const callback = jest.fn();

    render(<Timer onTimeUp={callback} />);

    jest.useFakeTimers();
    jest.runAllTimers();

    setTimeout(() => {
      expect(callback).toBeCalled();
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    }, 8000);
  });
});
