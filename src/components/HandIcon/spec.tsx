import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import HandIcon from '@components/HandIcon';
import { Context, State } from '@components/App/store';

describe('Deck', () => {
  const HandIconMock =
    <Context.Provider value={{ dispatch: jest.fn(), state: State }}>
      <HandIcon />
    </Context.Provider>;

  it('should render correctly', () => {
    const tree = renderer
      .create(HandIconMock)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('hover', () => {
    it('should update style on hover', () => {
      const wrapper = mount(HandIconMock);
      expect(wrapper.find('div')).toHaveStyleRule(
        'fill',
        'rgb(255,255,255)',
        { modifier: 'svg:hover .svgCard' },
      );
      expect(wrapper.find('div')).toHaveStyleRule(
        'stroke',
        'rgb(112,112,112)',
        { modifier: 'svg:hover .svgCard' },
      );
    });
  });
});
