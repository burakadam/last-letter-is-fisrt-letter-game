import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { REDUCERS } from '@/constants/reducers';
import { IGameState, initialState } from '@/store/game';
import { renderWithProviders } from '@/utils/testUtils';

import { Listener } from '../Listener';

const MockInitialState: IGameState = {
  ...initialState,
  gameStage: 'game',
  playerTurn: 'guest',
  isStarted: true,
  isListening: true,
  activeGuestAnswer: 'Burak',
};

describe('add listener that get names from host and validate it', () => {
  let container: HTMLElement;
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    ({ container } = renderWithProviders(<Listener />, {
      preloadedState: {
        [REDUCERS.GAME]: MockInitialState,
      },
    }));
  });

  it('render component correctly', () => {
    expect(container).toMatchSnapshot();
  });

  it('find the name comes from mock state', () => {
    expect(screen.getByText('Burak')).toBeInTheDocument();
  });
});
