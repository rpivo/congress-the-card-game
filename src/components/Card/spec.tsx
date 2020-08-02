import { shallow } from 'enzyme';
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

    it('should have a default box-shadow', () => {
      const tree = renderer
        .create(<Card />)
        .toJSON();
      expect(tree).toHaveStyleRule(
        'box-shadow',
        '0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24)',
      );
    });

    it('should update background on active', () => {
      const tree = renderer
        .create(<Card />)
        .toJSON();
      expect(tree).toHaveStyleRule(
        'background',
        '#9FFFB0',
        { modifier: ':active' },
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

  describe('classList', () => {
    it('should not initialize with the .active class', () => {
      const wrapper = shallow(<Card />);
      expect(wrapper.find('.card').hasClass('active')).toBe(false);
    });

    it('should update to have the .active class on click', () => {
      const wrapper = shallow(<Card />);
      wrapper.simulate('click');
      expect(wrapper.find('.card').hasClass('active')).toBe(true);
    });
  });
});
