import React from 'react';
import cardData from '@utilities/cards.json';
import { createStringEnum } from '@utilities/types';

const {
  DRAW_CARD,
  DISCARD_CARD,
  END_TURN,
  HAND_FULL,
  SHOW_HAND,
  HIDE_HAND,
} = Actions;

export type Actions = keyof typeof Actions;

const getCardOrder = (): number[] => {
  const cardCount = Object.keys(cardData).length;
  const cardIDs = Array.from([...Array(cardCount).keys()]);
  for (let i = cardCount - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardIDs[i], cardIDs[j]] = [cardIDs[j], cardIDs[i]];
  }
  return cardIDs;
};

export type StateShape = {
  canDrawCard: boolean;
  cardOrder: number[];
  handCards: number[];
  notifyHandIsFull: boolean;
  playAreaCards: number[];
  shouldShowHand: boolean;
};

export const getDefaultState = (): StateShape => {
  const cardOrder = getCardOrder();
  return {
    canDrawCard: true,
    cardOrder,
    handCards: [],
    notifyHandIsFull: false,
    playAreaCards: cardOrder.splice(0, 5),
    shouldShowHand: false,
  };
};

export const Reducer = (state: StateShape, action: Actions): StateShape => {
  switch (action) {
    case 'DRAW_CARD':
      return {
        ...state,
        canDrawCard: false,
        handCards: [
          ...state.handCards,
          state.cardOrder.shift(),
        ] as number[],
        notifyHandIsFull: false,
        shouldShowHand: true,
      };
    case 'END_TURN':
      return {
        ...state,
        canDrawCard: true,
      };
    case 'HAND_FULL':
      return {
        ...state,
        notifyHandIsFull: !state.notifyHandIsFull,
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
  state: StateShape;
};

export const Context = React.createContext({} as Context);
