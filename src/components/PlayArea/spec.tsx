import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Card from '@components/Card';
import Deck from '@components/Deck';
import PlayArea from '@components/PlayArea';
import { Context } from '@components/App/store';

const StateMock = {
  canDrawCard: true,
  cardOrder: [5, 6, 7, 8, 9],
  handCards: [],
  isHandFull: false,
  notifyHandIsFull: false,
  playAreaCards: [0, 1, 2, 3, 4],
  shouldShowHand: false,
};

describe('PlayArea', () => {
  const PlayAreaMock =
    <Context.Provider value={{ dispatch: jest.fn(), state: StateMock }}>
      <PlayArea activeCard={-1} handleCardClick={jest.fn()} />
    </Context.Provider>;

  it('should render correctly', () => {
    const tree = renderer
      .create(PlayAreaMock)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Cards', () => {
    it('should render the correct amount of Card components', () => {
      const wrapper = mount(PlayAreaMock);
      expect(wrapper.find(Card)).toHaveLength(5);
    });
  });

  describe('Deck', () => {
    it('should render the Deck component', () => {
      const wrapper = mount(PlayAreaMock);
      expect(wrapper.find(Deck)).toHaveLength(1);
    });

    it('should should initially contain the "Draw a Card." paragraph', () => {
      const wrapper = mount(PlayAreaMock);
      expect(wrapper.find(Deck).find('p')).toHaveLength(1);
    });
  });
});
