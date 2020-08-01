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

    it('should default box-shadow', () => {
      const tree = renderer
        .create(<Card />)
        .toJSON();
      expect(tree).toHaveStyleRule(
        'box-shadow',
        '0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24)',
      );
    });

    it('should update box-shadow on hover', () => {
      const tree = renderer
        .create(<Card />)
        .toJSON();
      expect(tree).toHaveStyleRule(
        'box-shadow',
        '0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22)',
        { modifier: ':hover' },
      );
    });
  });
});
