import { ShallowWrapper } from 'enzyme';

// Basarat helper function for generating a string enum that can be used as a type.
export const createStringEnum = <T extends string>(arr: Array<T>): { [K in T]: K } => {
  return arr.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
};

// enzyme's ShallowWrapper interface with added `style` property
export type StyledShallowWrapper = ShallowWrapper & { style: Record<string, unknown> };
