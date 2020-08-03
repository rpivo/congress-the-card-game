import { ShallowWrapper } from 'enzyme';

// enzyme's ShallowWrapper interface with added `style` property
export type StyledShallowWrapper = ShallowWrapper & { style: Record<string, unknown> };
