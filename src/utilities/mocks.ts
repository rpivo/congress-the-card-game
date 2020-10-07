import { StopPropagationMouseEvent } from '@utilities/types';

export const eventMap: Record<string, ({ code }: { code: string }) => void> = {};

export const stopPropagationMouseEvent = {
  altKey: false,
  button: 0,
  buttons: 0,
  clientX: 0,
  clientY: 0,
  ctrlKey: false,
  metaKey: false,
  movementX: 0,
  movementY: 0,
  pageX: 0,
  pageY: 0,
  relatedTarget: null,
  screenX: 0,
  screenY: 0,
  shiftKey: false,
  stopPropagation: jest.fn(),
} as unknown as StopPropagationMouseEvent;
