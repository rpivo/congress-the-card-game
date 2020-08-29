import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { StopPropagationMouseEvent } from '@utilities/types';
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

  describe('canDrawCard state', () => {
    it(`should show the "Take a Card" ArrowIcon after the Deck has already been clicked and the
    "End Turn" ArrowIcon is subsequently clicked`, () => {
      const wrapper = mount(<App />);
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
      const selector = wrapper.find('.stackedCard').at(0).prop('onClick');
      const event = {} as React.MouseEvent;
      if (selector) act(() => selector(event));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);
      const endTurnSelector = wrapper.find('.endTurnIcon').at(0).prop('onClick');
      if (endTurnSelector) act(() => endTurnSelector(event));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
    });

    it(`should perform no action if the "End Turn" ArrowIcon while the "Take a Card" ArrowIcon is
    already showing`, () => {
      const wrapper = mount(<App />);
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
      const event = {} as React.MouseEvent;
      const endTurnSelector = wrapper.find('.endTurnIcon').at(0).prop('onClick');
      if (endTurnSelector) act(() => endTurnSelector(event));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
    });

    it('should perform no action if an ArrowIcon with class drawCardIcon is clicked', () => {
      const wrapper = mount(<App />);
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
      const event = {} as React.MouseEvent;
      const drawCardSelector = wrapper.find('.drawCardIcon').at(0).prop('onClick');
      if (drawCardSelector) act(() => drawCardSelector(event));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
    });
  });

  describe('shouldShowHand state', () => {
    it('should not hide the Hand component if it\'s already displaying and it\'s clicked', () => {
      const wrapper = mount(<App />);
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(true);
      wrapper.find('.handIcon').at(0).simulate('click');
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(false);
      wrapper.find('.hand').at(0).simulate('click');
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(false);
    });

    it(`should hide the Hand component if it's already displaying and a Card component is
    clicked`, () => {
      const wrapper = mount(<App />);
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(true);
      wrapper.find('.handIcon').at(0).simulate('click');
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(false);
      wrapper.find('.card').at(0).simulate('mousedown');
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(true);
    });

    it('should not display the drawCardIcon on the Deck once the deck is clicked', () => {
      const wrapper = mount(<App />);
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
      const selector = wrapper.find('.stackedCard').at(0).prop('onClick');
      const event = {} as React.MouseEvent;
      if (selector) act(() => selector(event));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);
    });

    it('should show the Hand if the Deck is clicked when the drawCardIcon is showing', () => {
      const wrapper = mount(<App />);
      expect(wrapper.find('.hand').find('.hidden').at(0)).toHaveLength(1);
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
      const selector = wrapper.find('.stackedCard').at(0).prop('onClick');
      const event = {} as React.MouseEvent;
      if (selector) act(() => selector(event));
      wrapper.update();
      expect(wrapper.find('.hand').find('.hidden').at(0)).toHaveLength(0);
    });

    it(`should not show the Hand if the Deck is clicked when the drawCardIcon is not 
    showing`, () => {
      const wrapper = mount(<App />);
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(true);
      const event = {} as React.MouseEvent;
      const deckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (deckSelector) act(() => deckSelector(event));
      wrapper.update();
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(false);
      const appSelector = wrapper.find('div').at(0).prop('onClick');
      if (appSelector) act(() => appSelector(event));
      wrapper.update();
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(true);
    });

    it('should show the hand when the HandIcon is clicked', () => {
      const wrapper = mount(<App />);
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(true);
      const event = {
        altKey: false,
        button: 0,
        buttons: 0,
        clientX: 0,
        clientY: 0,
        ctrlKey: false,
        metaKey: false,
        movementX: 0,
        movementY: 0,
        pageX: 0,
        pageY: 0,
        relatedTarget: null,
        screenX: 0,
        screenY: 0,
        shiftKey: false,
        stopPropagation: jest.fn(),
      } as unknown as StopPropagationMouseEvent;
      const selector = wrapper.find('.handIcon').find('div').at(0).prop('onClick');
      if (selector) act(() => selector(event));
      wrapper.update();
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(false);
      const updatedSelector = wrapper.find('.handIcon').find('div').at(0).prop('onClick');
      if (updatedSelector) act(() => updatedSelector(event));
      wrapper.update();
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(false);
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
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(true);
      wrapper.find('.handIcon').at(0).simulate('click');
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(false);
      wrapper.find(App).simulate('click');
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(true);
    });
  });
});
