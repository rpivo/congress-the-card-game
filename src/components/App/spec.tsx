import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '@components/App';
import Hand from '@components/Hand';
import PlayArea from '@components/PlayArea';

describe('App', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('activeCard state', () => {
    it('should render the PlayArea', () => {
      const wrapper = mount(<App />);
      expect(wrapper.find(PlayArea)).toHaveLength(1);
    });

    it('should add/remove the .active class from Card components on mousedown', () => {
      const wrapper = mount(<App />);
      wrapper.find('.card').at(0).simulate('mousedown');
      expect(wrapper.find('.card').at(0).hasClass('active')).toBe(true);
      wrapper.find('.card').at(0).simulate('mousedown');
      expect(wrapper.find('.card').at(0).hasClass('active')).toBe(false);
    });

    it('should remove the .active class from Card components when PlayArea is clicked', () => {
      const wrapper = mount(<App />);
      wrapper.find('.card').at(0).simulate('mousedown');
      expect(wrapper.find('.card').at(0).hasClass('active')).toBe(true);
      wrapper.find('.playArea').at(0).simulate('click');
      expect(wrapper.find('.card').at(0).hasClass('active')).toBe(false);
    });
  });

  describe('shouldDisplayHand state', () => {
    it('should not hide the Hand component if it\'s already displaying and it\'s clicked', () => {
      const wrapper = mount(<App />);
      expect(wrapper.find(Hand).find('div').hasClass('hidden')).toBe(true);
      wrapper.find('.handIcon').at(0).simulate('click');
      expect(wrapper.find(Hand).find('div').hasClass('hidden')).toBe(false);
      wrapper.find('.hand').at(0).simulate('click');
      expect(wrapper.find(Hand).find('div').hasClass('hidden')).toBe(false);
    });

    it(`should hide the Hand component if it's already displaying and a Card compnent is
    clicked`, () => {
      const wrapper = mount(<App />);
      expect(wrapper.find(Hand).find('div').hasClass('hidden')).toBe(true);
      wrapper.find('.handIcon').at(0).simulate('click');
      expect(wrapper.find(Hand).find('div').hasClass('hidden')).toBe(false);
      wrapper.find('.card').at(0).simulate('mousedown');
      expect(wrapper.find(Hand).find('div').hasClass('hidden')).toBe(true);
    });
  });

  describe('handleClick', () => {
    it(`should remove active card state when an active card exists and the App component is
    clicked`, () => {
      const wrapper = mount(<App />);
      wrapper.find('.card').at(0).simulate('mousedown');
      wrapper.find(App).simulate('click');
      expect(wrapper.find('.active')).toHaveLength(0);
    });

    it(`should hide Hand component when Hand component is showing and the App component is
    clicked`, () => {
      const wrapper = mount(<App />);
      expect(wrapper.find(Hand).find('div').hasClass('hidden')).toBe(true);
      wrapper.find('.handIcon').at(0).simulate('click');
      expect(wrapper.find(Hand).find('div').hasClass('hidden')).toBe(false);
      wrapper.find(App).simulate('click');
      expect(wrapper.find(Hand).find('div').hasClass('hidden')).toBe(true);
    });
  });
});
