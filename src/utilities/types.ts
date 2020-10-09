import { ShallowWrapper } from 'enzyme';

// extends React's MouseEvent interface with stopPropagation()
export interface StopPropagationMouseEvent extends React.MouseEvent {
  stopPropagation: () => unknown;
}

// enzyme's ShallowWrapper interface with added `style` property
export type StyledShallowWrapper = ShallowWrapper & { style: Record<string, unknown> };
