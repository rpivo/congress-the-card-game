import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { eventMap, stopPropagationMouseEvent } from '@utilities/mocks';
import App from '@components/App';
import Card from '@components/Card';
import Hand from '@components/Hand';
import Notification from '@components/Notification';
import PlayArea from '@components/PlayArea';

describe('App', () => {
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

    it('should remove the .active class from Card components when App is clicked', () => {
      const wrapper = mount(<App />);

      wrapper.find('.card').at(0).simulate('mousedown');
      expect(wrapper.find('.card').at(0).hasClass('active')).toBe(true);

      const selector = wrapper.find('.app').at(0).prop('onClick');
      const event = {} as React.MouseEvent;
      if (selector) act(() => selector(event));
      wrapper.update();
      expect(wrapper.find('.card').at(0).hasClass('active')).toBe(false);
    });

    it('should not add the .active class when the card\'s x icon is clicked', () => {
      const wrapper = mount(<App />);
      expect(wrapper.find('.card').at(0).hasClass('active')).toBe(false);

      // draw card
      const deckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (deckSelector) act(() => deckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);

      // open hand
      wrapper.find('.hand').at(0).simulate('click');
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(false);
      expect(wrapper.find(Hand).find(Card)).toHaveLength(1);

      // enter mouse over card
      wrapper.find('.hand').find('.card').at(0).simulate('mouseenter');
      expect(wrapper.find(Hand).find(Card).find('.xIcon')).toHaveLength(1);

      // click x icon on card
      const xIconSelector = wrapper.find(Hand).find(Card).find('.xIcon').prop('onMouseDown');
      if (xIconSelector) act(() => xIconSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.card').at(0).hasClass('active')).toBe(false);
    });
  });

  describe('canDrawCard state', () => {
    it(`should show the "Take a Card" ArrowIcon after the Deck has already been clicked and the
    "End Turn" ArrowIcon is subsequently clicked`, () => {
      const wrapper = mount(<App />);
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);

      const selector = wrapper.find('.stackedCard').at(0).prop('onClick');
      if (selector) act(() => selector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);

      const endTurnSelector = wrapper.find('.endTurnIcon').at(0).prop('onClick');
      if (endTurnSelector) act(() => endTurnSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
    });

    it(`should perform no action if the "End Turn" ArrowIcon is clicked while the "Take a Card"
    ArrowIcon is already showing`, () => {
      const wrapper = mount(<App />);
      const event = {} as React.MouseEvent;
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);

      const endTurnSelector = wrapper.find('.endTurnIcon').at(0).prop('onClick');
      if (endTurnSelector) act(() => endTurnSelector(event));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
    });

    it('should perform no action if an ArrowIcon with class drawCardIcon is clicked', () => {
      const wrapper = mount(<App />);
      const event = {} as React.MouseEvent;
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);

      const drawCardSelector = wrapper.find('.drawCardIcon').at(0).prop('onClick');
      if (drawCardSelector) act(() => drawCardSelector(event));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
    });

    it(`should perform no action if the Deck is clicked when the ArrowIcon with class drawCardIcon
    is not showing`, () => {
      const wrapper = mount(<App />);
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);

      const deckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (deckSelector) act(() => deckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);

      if (deckSelector) act(() => deckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);
    });

    it('should remove a "New Turn" Notification after 1.5 seconds', () => {
      const wrapper = mount(<App />);
      const event = {} as React.MouseEvent;
      expect(wrapper.find(Notification)).toHaveLength(0);

      // draw card, end turn
      const deckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (deckSelector) act(() => deckSelector(stopPropagationMouseEvent));
      wrapper.update();
      const endTurnSelector = wrapper.find('.endTurnIcon').at(0).prop('onClick');
      if (endTurnSelector) act(() => endTurnSelector(event));
      wrapper.update();
      expect(wrapper.find(Notification)).toHaveLength(1);

      act(() => {
        jest.advanceTimersByTime(2000);
      });
      wrapper.update();

      expect(wrapper.find(Notification)).toHaveLength(0);
    });

    it('should remove a "Your hand is full" and "New Turn" Notifications after time passes', () => {
      const wrapper = mount(<App />);
      const event = {} as React.MouseEvent;
      expect(wrapper.find(Notification)).toHaveLength(0);

      // draw first card, end turn
      const deckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (deckSelector) act(() => deckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);
      const endTurnSelector = wrapper.find('.endTurnIcon').at(0).prop('onClick');
      if (endTurnSelector) act(() => endTurnSelector(event));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);

      act(() => {
        jest.advanceTimersByTime(2000);
      });
      wrapper.update();

      // draw second card, end turn
      const secondDeckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (secondDeckSelector) act(() => secondDeckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);
      const secondEndTurnSelector = wrapper.find('.endTurnIcon').at(0).prop('onClick');
      if (secondEndTurnSelector) act(() => secondEndTurnSelector(event));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);

      act(() => {
        jest.advanceTimersByTime(2000);
      });
      wrapper.update();

      // draw third card, end turn
      const thirdDeckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (thirdDeckSelector) act(() => thirdDeckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);
      const thirdEndTurnSelector = wrapper.find('.endTurnIcon').at(0).prop('onClick');
      if (thirdEndTurnSelector) act(() => thirdEndTurnSelector(event));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);

      act(() => {
        jest.advanceTimersByTime(2000);
      });
      wrapper.update();

      // draw fourth card, end turn
      const fourthDeckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (fourthDeckSelector) act(() => fourthDeckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);
      const fourthEndTurnSelector = wrapper.find('.endTurnIcon').at(0).prop('onClick');
      if (fourthEndTurnSelector) act(() => fourthEndTurnSelector(event));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);

      act(() => {
        jest.advanceTimersByTime(2000);
      });
      wrapper.update();

      // draw fifth card, end turn
      const fifthDeckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (fifthDeckSelector) act(() => fifthDeckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);
      const fifthEndTurnSelector = wrapper.find('.endTurnIcon').at(0).prop('onClick');
      if (fifthEndTurnSelector) act(() => fifthEndTurnSelector(event));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);

      act(() => {
        jest.advanceTimersByTime(2000);
      });
      wrapper.update();

      const sixthDeckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (sixthDeckSelector) act(() => sixthDeckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);

      act(() => {
        jest.advanceTimersByTime(2000);
      });
      wrapper.update();

      expect(wrapper.find(Notification)).toHaveLength(0);
    });
  });

  describe('handCards state', () => {
    it('should not draw a Card if handCards has 5 items', () => {
      const wrapper = mount(<App />);
      const event = {} as React.MouseEvent;

      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);

      // draw first card
      const deckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (deckSelector) act(() => deckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);

      // draw second card
      const endTurnSelector = wrapper.find('.endTurnIcon').at(0).prop('onClick');
      if (endTurnSelector) act(() => endTurnSelector(event));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
      const secondDeckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (secondDeckSelector) act(() => secondDeckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);

      // // draw third card
      const secondEndTurnSelector = wrapper.find('.endTurnIcon').at(0).prop('onClick');
      if (secondEndTurnSelector) act(() => secondEndTurnSelector(event));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
      const thirdDeckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (thirdDeckSelector) act(() => thirdDeckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);

      // // draw fourth card
      const thirdEndTurnSelector = wrapper.find('.endTurnIcon').at(0).prop('onClick');
      if (thirdEndTurnSelector) act(() => thirdEndTurnSelector(event));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
      const fourthDeckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (fourthDeckSelector) act(() => fourthDeckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);

      // // draw fifth card
      const fourthEndTurnSelector = wrapper.find('.endTurnIcon').at(0).prop('onClick');
      if (fourthEndTurnSelector) act(() => fourthEndTurnSelector(event));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
      const fifthDeckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (fifthDeckSelector) act(() => fifthDeckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);

      // // attempt to draw a sixth card
      const fifthEndTurnSelector = wrapper.find('.endTurnIcon').at(0).prop('onClick');
      if (fifthEndTurnSelector) act(() => fifthEndTurnSelector(event));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
      const sixthDeckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (sixthDeckSelector) act(() => sixthDeckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
    });

    it('should discard a card when a card\'s X icon is clicked', () => {
      const event = {} as React.MouseEvent;
      const wrapper = mount(<App />);
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);

      // draw card
      const deckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (deckSelector) act(() => deckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);

      // open hand
      wrapper.find('.hand').at(0).simulate('click');
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(false);
      expect(wrapper.find(Hand).find(Card)).toHaveLength(1);

      // enter mouse over card
      wrapper.find('.hand').find('.card').at(0).simulate('mouseenter');
      expect(wrapper.find(Hand).find(Card).find('.xIcon')).toHaveLength(1);

      // click x icon on card
      const xIconSelector = wrapper.find(Hand).find(Card).find('.xIcon').prop('onClick');
      if (xIconSelector) act(() => xIconSelector(event));
      wrapper.update();
      expect(wrapper.find(Hand).find(Card)).toHaveLength(0);
    });
  });

  describe('isHandFull state', () => {
    it(`should not create a notification when the hand is initially full, a card is discard, and
    then a card is drawn`, () => {
      const wrapper = mount(<App />);
      const event = {} as React.MouseEvent;

      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);

      // draw first card
      const deckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (deckSelector) act(() => deckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);

      // draw second card
      const endTurnSelector = wrapper.find('.endTurnIcon').at(0).prop('onClick');
      if (endTurnSelector) act(() => endTurnSelector(event));
      wrapper.update();

      act(() => {
        jest.advanceTimersByTime(2000);
      });
      wrapper.update();

      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
      const secondDeckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (secondDeckSelector) act(() => secondDeckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);

      // // draw third card
      const secondEndTurnSelector = wrapper.find('.endTurnIcon').at(0).prop('onClick');
      if (secondEndTurnSelector) act(() => secondEndTurnSelector(event));
      wrapper.update();

      act(() => {
        jest.advanceTimersByTime(2000);
      });
      wrapper.update();

      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
      const thirdDeckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (thirdDeckSelector) act(() => thirdDeckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);

      // // draw fourth card
      const thirdEndTurnSelector = wrapper.find('.endTurnIcon').at(0).prop('onClick');
      if (thirdEndTurnSelector) act(() => thirdEndTurnSelector(event));
      wrapper.update();

      act(() => {
        jest.advanceTimersByTime(2000);
      });
      wrapper.update();

      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
      const fourthDeckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (fourthDeckSelector) act(() => fourthDeckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);

      // // draw fifth card
      const fourthEndTurnSelector = wrapper.find('.endTurnIcon').at(0).prop('onClick');
      if (fourthEndTurnSelector) act(() => fourthEndTurnSelector(event));
      wrapper.update();

      act(() => {
        jest.advanceTimersByTime(2000);
      });
      wrapper.update();

      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
      const fifthDeckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (fifthDeckSelector) act(() => fifthDeckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);

      // // attempt to draw a sixth card
      const fifthEndTurnSelector = wrapper.find('.endTurnIcon').at(0).prop('onClick');
      if (fifthEndTurnSelector) act(() => fifthEndTurnSelector(event));
      wrapper.update();

      act(() => {
        jest.advanceTimersByTime(2000);
      });
      wrapper.update();

      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
      const sixthDeckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (sixthDeckSelector) act(() => sixthDeckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);

      act(() => {
        jest.advanceTimersByTime(2000);
      });
      wrapper.update();

      // enter mouse over card
      wrapper.find('.hand').find('.card').at(0).simulate('mouseenter');
      expect(wrapper.find(Hand).find(Card).find('.xIcon')).toHaveLength(1);

      // click x icon on card
      const xIconSelector = wrapper.find(Hand).find(Card).find('.xIcon').prop('onClick');
      if (xIconSelector) act(() => xIconSelector(event));
      wrapper.update();
      expect(wrapper.find(Hand).find(Card)).toHaveLength(4);

      const seventhDeckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (seventhDeckSelector) act(() => seventhDeckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find(Notification)).toHaveLength(0);
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
      if (selector) act(() => selector(stopPropagationMouseEvent));
      wrapper.update();

      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);
    });

    it('should show the Hand if the Deck is clicked when the drawCardIcon is showing', () => {
      const wrapper = mount(<App />);
      expect(wrapper.find('.hand').find('.hidden').at(0)).toHaveLength(1);
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);

      const selector = wrapper.find('.stackedCard').at(0).prop('onClick');
      if (selector) act(() => selector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.hand').find('.hidden').at(0)).toHaveLength(0);
    });

    it(`should not show the Hand if the Deck is clicked when the drawCardIcon is not 
    showing`, () => {
      const wrapper = mount(<App />);
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(true);

      const deckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (deckSelector) act(() => deckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(false);

      const appSelector = wrapper.find('div').at(0).prop('onClick');
      if (appSelector) act(() => appSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(true);
    });

    it('should show the hand when the HandIcon is clicked', () => {
      const wrapper = mount(<App />);
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(true);

      const selector = wrapper.find('.handIcon').find('div').at(0).prop('onClick');
      if (selector) act(() => selector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(false);

      const updatedSelector = wrapper.find('.handIcon').find('div').at(0).prop('onClick');
      if (updatedSelector) act(() => updatedSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(false);
    });
  });

  describe('handleCardClick', () => {
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

  describe('handleCardMove', () => {
    it(`should print to the console when a hand card is clicked and the mouse is moved, and then 
    stop printing to the console after the hand card is clicked again`, () => {
      const wrapper = mount(<App />);
      const mouseMove = new MouseEvent('mousemove');
      console.log = jest.fn();

      // draw card
      const deckSelector = wrapper.find('.stackedCard').find('div').at(0).prop('onClick');
      if (deckSelector) act(() => deckSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);

      // open hand
      wrapper.find('.hand').at(0).simulate('click');
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(false);
      expect(wrapper.find(Hand).find(Card)).toHaveLength(1);

      // click hand card
      const cardSelector = wrapper.find('.hand').find('.card').at(0).prop('onMouseDown');
      if (cardSelector) act(() => cardSelector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.hand').find('.card').at(0).hasClass('active')).toBe(true);

      // move the mouse
      act(() => {
        window.dispatchEvent(mouseMove);
      });
      wrapper.update();
      expect(console.log).toHaveBeenCalledTimes(1);

      // move again just to be sure
      act(() => {
        window.dispatchEvent(mouseMove);
      });
      wrapper.update();
      expect(console.log).toHaveBeenCalledTimes(2);

      // click hand card again, and the move the mouse
      const secondCardSelector = wrapper.find('.hand').find('.card').at(0).prop('onMouseDown');
      if (secondCardSelector) act(() => secondCardSelector(stopPropagationMouseEvent));
      wrapper.update();
      act(() => {
        window.dispatchEvent(mouseMove);
      });
      wrapper.update();
      expect(console.log).toHaveBeenCalledTimes(2);
    });
  });

  describe('handleKeyboardEvent', () => {
    it('should show the hand if the hand was previously hidden when spacebar is pressed', () => {
      window.addEventListener = jest.fn().mockImplementation((event, cb) => {
        eventMap[event] = cb;
      });
      const wrapper = mount(<App />);
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(true);
      act(() => eventMap.keydown({ code: 'Space' }));
      wrapper.update();
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(false);
    });

    it('should hide the hand if the hand was previously showing when spacebar is pressed', () => {
      window.addEventListener = jest.fn().mockImplementation((event, cb) => {
        eventMap[event] = cb;
      });
      const wrapper = mount(<App />);
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(true);

      act(() => eventMap.keydown({ code: 'Space' }));
      wrapper.update();
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(false);

      act(() => eventMap.keydown({ code: 'Space' }));
      wrapper.update();
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(true);
    });

    it('should end the turn if the turn is endable when the Enter key is pressed', () => {
      window.addEventListener = jest.fn().mockImplementation((event, cb) => {
        eventMap[event] = cb;
      });
      const wrapper = mount(<App />);
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);

      // draw a card
      const selector = wrapper.find('.stackedCard').at(0).prop('onClick');
      if (selector) act(() => selector(stopPropagationMouseEvent));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(0);

      // end turn with Enter key
      act(() => eventMap.keydown({ code: 'Enter' }));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
    });

    it('should not end the turn if the turn is not endable when the Enter key is pressed', () => {
      window.addEventListener = jest.fn().mockImplementation((event, cb) => {
        eventMap[event] = cb;
      });
      const wrapper = mount(<App />);
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);

      // attempt to end turn with Enter key
      act(() => eventMap.keydown({ code: 'Enter' }));
      wrapper.update();
      expect(wrapper.find('.drawCardIcon').at(0)).toHaveLength(1);
    });

    it('should do nothing if a non-spacebar key is pressed', () => {
      window.addEventListener = jest.fn().mockImplementation((event, cb) => {
        eventMap[event] = cb;
      });
      const wrapper = mount(<App />);
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(true);

      act(() => eventMap.keydown({ code: 'KeyA' }));
      wrapper.update();
      expect(wrapper.find(Hand).find('div').at(0).hasClass('hidden')).toBe(true);
    });
  });
});
