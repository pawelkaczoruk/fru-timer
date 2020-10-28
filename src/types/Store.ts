import { Values } from './Timer'

export interface SessionHistory {
  single: Values;
  mo3: Values;
  ao5: Values;
  ao12: Values;  
}

export interface SessionStats {
  single: number;
  mo3: number;
  ao5: number;
  ao12: number;  
}

export interface Config {
  activeSessionKey: number;
  areStatsVisible: boolean;
  isListVisible: boolean;
}