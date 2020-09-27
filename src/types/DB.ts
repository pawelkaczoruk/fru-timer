export interface SessionConfigItem {
  name: string;
  key: number;
}

export interface SessionsConfig {
  basic: Array<SessionConfigItem>;
  custom: Array<SessionConfigItem>;
}