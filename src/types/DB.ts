export type SessionsConfig = Array<SessionConfig>
export interface SessionConfig {
  name: string;
  key: number;
  cube: string;
}

export interface BasicCustomSessionsConfigs {
  basic: SessionsConfig;
  custom: SessionsConfig;
}