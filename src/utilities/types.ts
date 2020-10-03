import { ShallowWrapper } from 'enzyme';

export enum Actions {
  DRAW_CARD = 'DRAW_CARD',
  DISCARD_CARD = 'DISCARD_CARD',
  END_TURN = 'END_TURN',
  HAND_FULL = 'HAND_FULL',
  HIDE_HAND = 'HIDE_HAND',
  SHOW_HAND = 'SHOW_HAND',
}

// extends React's MouseEvent interface with stopPropagation()
export interface StopPropagationMouseEvent extends React.MouseEvent {
  stopPropagation: () => unknown;
}

// enzyme's ShallowWrapper interface with added `style` property
export type StyledShallowWrapper = ShallowWrapper & { style: Record<string, unknown> };
