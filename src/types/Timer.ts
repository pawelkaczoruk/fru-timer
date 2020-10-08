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

export interface Time {
  penalty: number;
  value: number;
}

export interface Result {
  time: Time;
  scramble: string;
  comment: string;
  date: number;
}

export type AverageType = 'mean' | 'avg'

export function isKeyboardEvent(value: KeyboardEvent | TouchEvent): value is KeyboardEvent {
  return (value as KeyboardEvent).code !== undefined
}

export enum ResultState {
  NOT_ENOUGH_TIMES = -2,
  DNF = -1,
  NO_PENALTY = 0,
  PLUS_TWO = 2000
}

export enum TimerState {
  NOT_READY = -1,
  IDLE = 0,
  READY = 1
}