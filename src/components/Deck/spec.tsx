import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Deck from '@components/Deck';
import { Context, getDefaultState } from '@components/App/store';
import { stopPropagationMouseEvent } from '@utilities/mocks';

describe('Deck', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <Context.Provider value={{ dispatch: jest.fn(), state: getDefaultState() }}>
        <Deck />
      </Context.Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('handleClick', () => {
    it('should call dispatch when clicked', () => {
      const dispatch = jest.fn();
      const wrapper = mount(
        <Context.Provider value={{ dispatch, state: getDefaultState() }}>
          <Deck />
        </Context.Provider>
      );
      const selector = wrapper.find('.stackedCard').at(0).prop('onClick');
      if (selector) act(() => selector(stopPropagationMouseEvent));
      wrapper.update();
      expect(dispatch).toHaveBeenCalled();
    });

    it('should not call dispatch when clicked and canDrawCard is false', () => {
      const dispatch = jest.fn();
      const wrapper = mount(
        <Context.Provider value={{ dispatch, state: { ...getDefaultState(), canDrawCard: false } }}>
          <Deck />
        </Context.Provider>
      );
      const selector = wrapper.find('.stackedCard').at(0).prop('onClick');
      if (selector) act(() => selector(stopPropagationMouseEvent));
      wrapper.update();
      expect(dispatch).toBeCalledTimes(0);
    });

    it('should not call dispatch if there are already five cards in the Hand', () => {
      const dispatch = jest.fn();
      console.log = jest.fn();
      const wrapper = mount(
        <Context.Provider value={{
          dispatch,
          state: { ...getDefaultState(), handCards: [0, 1, 2, 3, 4] },
        }}>
          <Deck />
        </Context.Provider>
      );
      const selector = wrapper.find('.stackedCard').at(0).prop('onClick');
      if (selector) act(() => selector(stopPropagationMouseEvent));
      wrapper.update();
      expect(dispatch).toBeCalledWith('HAND_FULL');
    });

    it('should not call dispatch if there are no more Card IDs to pull from cardOrder', () => {
      const dispatch = jest.fn();
      const wrapper = mount(
        <Context.Provider value={{
          dispatch,
          state: { ...getDefaultState(), cardOrder: [] },
        }}>
          <Deck />
        </Context.Provider>
      );
      const selector = wrapper.find('.stackedCard').at(0).prop('onClick');
      if (selector) act(() => selector(stopPropagationMouseEvent));
      wrapper.update();
      expect(dispatch).toBeCalledTimes(0);
    });
  });
});
