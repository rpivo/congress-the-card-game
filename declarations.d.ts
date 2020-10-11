import { Actions } from '@utilities/enums';

declare global {
  interface Window {
    profiler: {
      actualDuration: number;
      baseDuration: number;
      commitTime: number;
      id: string;
      interactions: Set<{ id: number; name: string; timestamp: number; }>;
      phase: string;
      startTime: number;
    }[];
  }

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
