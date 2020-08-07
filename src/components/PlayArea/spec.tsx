import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Card from '@components/Card';
import Deck from '@components/Deck';
import PlayArea from '@components/PlayArea';

describe('PlayArea', () => {
  const setActiveCard = jest.fn();
  const PlayAreaMock = <PlayArea activeCard={''} setActiveCard={setActiveCard} />;

  it('should render correctly', () => {
    const tree = renderer
      .create(PlayAreaMock)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Cards', () => {
    it('should render the correct amount of Card components', () => {
      const wrapper = mount(PlayAreaMock);
      expect(wrapper.find(Card)).toHaveLength(6);
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

    it('should not contain a "Draw a card." paragraph tag after being clicked', () => {
      const wrapper = mount(PlayAreaMock);
      const selector = wrapper.find('.stackedCard').at(0).prop('onClick');
      const event = {} as React.MouseEvent;
      if (selector) act(() => selector(event));
      wrapper.update();
      expect(wrapper.find('p')).toHaveLength(0);
    });
  });
});
