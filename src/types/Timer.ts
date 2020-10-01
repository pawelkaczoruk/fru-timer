export interface Timer {
  state: number;
  interval: number | undefined;
  timeout: number | undefined;
  initialDate: number;
  latestDate: number;

  canStart: boolean;
  isIdle: boolean;
  isRunning: boolean;
  isTimeAdded: boolean;
}

export interface Result {
  time: {
    penalty: number;
    value: number;
  };
  scramble: string;
  comment: string;
  date: number;
}

export type AverageType = 'mean' | 'avg'

export function isKeyboardEvent(value: KeyboardEvent | TouchEvent): value is KeyboardEvent {
  return (value as KeyboardEvent).code !== undefined
}