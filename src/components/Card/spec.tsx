import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Card from '@components/Card';

describe('App', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Card />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('style', () => {
    it('should default to a background of #EAEAEA', () => {
      const tree = renderer
        .create(<Card />)
        .toJSON();
      expect(tree).toHaveStyleRule('background', '#EAEAEA');
    });
  });
});
