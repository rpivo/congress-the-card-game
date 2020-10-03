import { Actions } from '@utilities/types';

declare global {
  type ActionType = {
    data?: Record<string, unknown>;
    type: keyof typeof Actions;
  };
}

export {};
