import { ShallowWrapper } from 'enzyme';

export enum Actions {
  DRAW_CARD = 'DRAW_CARD',
  DISCARD_CARD = 'DISCARD_CARD',
  END_TURN = 'END_TURN',
  HAND_FULL = 'HAND_FULL',
  HIDE_HAND = 'HIDE_HAND',
  SHOW_HAND = 'SHOW_HAND',
}

export enum Breakpoints {
  XLARGE = '@media screen and (max-width: 2500px)',
  LARGE = '@media screen and (max-width: 2000px)',
  MEDIUM = '@media screen and (max-width: 1750px)',
  SMALL = '@media screen and (max-width: 1500px)',
  XSMALL = '@media screen and (max-width: 1250px)',
}

export enum Icons {
  DRAW_CARD = 'DRAW_CARD',
  END_TURN = 'END_TURN',
}

export enum Notifications {
  GREEN = 'GREEN',
  RED = 'RED'
}

// extends React's MouseEvent interface with stopPropagation()
export interface StopPropagationMouseEvent extends React.MouseEvent {
  stopPropagation: () => unknown;
}

// enzyme's ShallowWrapper interface with added `style` property
export type StyledShallowWrapper = ShallowWrapper & { style: Record<string, unknown> };
