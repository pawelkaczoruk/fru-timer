import { SessionsConfig } from './DB'
import { Result } from './Timer'

export interface State {
  currentTime: number;
  currentScramble: string;
  config: Config;
  sessionResults: Array<Result>;
  sessionsConfig: SessionsConfig;
}

export interface Config {
  activeSessionKey: number;
}