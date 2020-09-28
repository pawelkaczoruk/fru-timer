export interface SessionConfigItem {
  name: string;
  key: number;
  cube: string;
}

export interface SessionsConfig {
  basic: Array<SessionConfigItem>;
  custom: Array<SessionConfigItem>;
}