/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { REDUCERS } from '@/constants/reducers';
import { IGameState, initialState } from '@/store/game';
import { renderWithProviders } from '@/utils/testUtils';

import { Speaker } from '../Speaker';

const MockInitialState: IGameState = {
  ...initialState,
  gameStage: 'game',
  playerTurn: 'host',
  isStarted: true,
  isSpeaking: true,
  hostAnswers: [''],
  activeHostAnswer: 'Burak',
};

describe('add speaker that finds names from data/names.json with or without given name last letter', () => {
  let container: HTMLElement;
  beforeEach(() => {
    ({ container } = renderWithProviders(<Speaker />, {
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
