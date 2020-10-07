import { SessionsConfig } from './DB'
import { Result } from './Timer'

export interface State {
  currentTime: number;
  currentScramble: string;
  config: Config;
  sessionResults: Array<Result>;
  sessionsConfig: SessionsConfig;
  sessionHistory: {
    single: Array<number>;
    mo3: Array<number>;
    ao5: Array<number>;
    ao12: Array<number>;
  }
  sessionBests: SessionStats
}

export interface SessionStats {
  single: number;
  mo3: number;
  ao5: number;
  ao12: number;  
}

export interface Config {
  activeSessionKey: number;
}