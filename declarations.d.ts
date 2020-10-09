import { Actions } from '@utilities/enums';

declare global {
  type ActionType = {
    data?: Record<string, unknown>;
    type: keyof typeof Actions;
  };

  type NotificationType = {
    message: string;
    type: string;
  }
}

export {};
