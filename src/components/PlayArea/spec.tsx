import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Card from '@components/Card';
import PlayArea from '@components/PlayArea';

describe('PlayArea', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<PlayArea />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Cards', () => {
    it('should render the correct amount of Card components', () => {
      const wrapper = mount(<PlayArea />);
      expect(wrapper.find(Card)).toHaveLength(10);
    });

    it('should add/remove the .active class from Card components on mousedown', () => {
      const wrapper = mount(<PlayArea />);
      wrapper.find('.card').at(0).simulate('mousedown');
      expect(wrapper.find('.card').at(0).hasClass('active')).toBe(true);
      wrapper.find('.card').at(0).simulate('mousedown');
      expect(wrapper.find('.card').at(0).hasClass('active')).toBe(false);
    });
  });
});
