import { SessionsConfig } from './DB'
import { Result } from './Timer'

export interface State {
  currentTime: number;
  config: Config;
  sessionResults: Array<Result>;
  sessionsConfig: SessionsConfig;
}

export interface Config {
  activeSessionKey: number;
}