import React from 'react';
import cardData from '@utilities/cards.json';
import { createStringEnum } from '@utilities/types';

const Actions = createStringEnum([
  'DRAW_CARD',
  'END_TURN',
  'HIDE_HAND',
  'SHOW_HAND',
]);

export type Actions = keyof typeof Actions;

const cardOrder = (() => {
  const cardCount = Object.keys(cardData).length;
  const cardIDs = Array.from([...Array(cardCount).keys()]);
  for (let i = cardCount - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardIDs[i], cardIDs[j]] = [cardIDs[j], cardIDs[i]];
  }
  return cardIDs;
})();

type StateShape = {
  canDrawCard: boolean;
  cardOrder: number[];
  handCards: (number | undefined)[];
  shouldShowHand: boolean;
};

export const State: StateShape = {
  canDrawCard: true,
  cardOrder,
  handCards: [],
  shouldShowHand: false,
};

export const Reducer = (state: typeof State, action: Actions): StateShape => {
  switch (action) {
    case 'DRAW_CARD':
      return {
        ...state,
        canDrawCard: false,
        handCards: [
          ...state.handCards,
          state.cardOrder.shift(),
        ],
        shouldShowHand: true,
      };
    case 'END_TURN':
      return {
        ...state,
        canDrawCard: true,
      };
    case 'SHOW_HAND':
      return {
        ...state,
        shouldShowHand: true,
      };
    case 'HIDE_HAND':
    default:
      return {
        ...state,
        shouldShowHand: false,
      };
  }
};

type Context = {
  dispatch: React.Dispatch<Actions>;
  state: typeof State;
};

export const Context = React.createContext({} as Context);
