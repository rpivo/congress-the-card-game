import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Deck from '@components/Deck';

describe('Deck', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Deck />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
