import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Deck from '@components/Deck';
import { Context, State } from '@components/App/store';

describe('Deck', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Context.Provider value={{ dispatch: jest.fn(), state: State }}>
          <Deck />
        </Context.Provider>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
