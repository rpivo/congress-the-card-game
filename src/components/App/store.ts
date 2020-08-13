import React from 'react';
import { createStringEnum } from '@utilities/types';

const Actions = createStringEnum([
  'DRAW_CARD',
  'HIDE_HAND',
  'SHOW_HAND',
]);

type Actions = keyof typeof Actions;

export const State = {
  canDrawCard: true,
  shouldDisplayHand: false,
};

export const Reducer = (state: typeof State, action: Actions): typeof State => {
  switch (action) {
    case 'DRAW_CARD':
      return {
        canDrawCard: false,
        shouldDisplayHand: true,
      };
    case 'SHOW_HAND':
      return {
        ...state,
        shouldDisplayHand: true,
      };
    case 'HIDE_HAND':
    default:
      return {
        ...state,
        shouldDisplayHand: false,
      };
  }
};

type Context = {
  dispatch: React.Dispatch<Actions>;
  state: typeof State;
};

export const Context = React.createContext({} as Context);
