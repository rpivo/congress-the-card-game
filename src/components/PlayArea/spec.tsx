import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Card from '@components/Card';
import PlayArea from '@components/PlayArea';

describe('PlayArea', () => {
  const setActiveCard = jest.fn();
  const PlayAreaMock = <PlayArea activeCard={-1} setActiveCard={setActiveCard} />;

  it('should render correctly', () => {
    const tree = renderer
      .create(PlayAreaMock)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Cards', () => {
    it('should render the correct amount of Card components', () => {
      const wrapper = mount(PlayAreaMock);
      expect(wrapper.find(Card)).toHaveLength(10);
    });
  });
});
