import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Card from '@components/Card';
import Deck from '@components/Deck';
import PlayArea from '@components/PlayArea';
import { Context, State } from '@components/App/store';

describe('PlayArea', () => {
  const PlayAreaMock =
    <Context.Provider value={{ dispatch: jest.fn(), state: State }}>
      <PlayArea activeCard={''} setActiveCard={jest.fn()} />
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
      expect(wrapper.find(Card)).toHaveLength(12);
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
