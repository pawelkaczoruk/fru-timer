import { SessionsConfig } from './DB'

export interface State {
  currentTime: number;
  sessionsConfig: SessionsConfig;
}