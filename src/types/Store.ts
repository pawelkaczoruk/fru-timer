import { SessionsConfig } from './DB'
import { Result } from './Timer'

export interface State {
  currentTime: number;
  sessionResult: Array<Result>;
  sessionsConfig: SessionsConfig;
}