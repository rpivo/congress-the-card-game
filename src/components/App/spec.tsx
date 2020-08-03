import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '@components/App';
import PlayArea from '@components/PlayArea';

describe('App', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('PlayArea', () => {
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
});
