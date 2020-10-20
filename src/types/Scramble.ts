export interface ScramblerConfig {
  repeat: number;
  setup: Array<ScramblerSetup>;
}

export type MoveGroups = Array<Array<string>>
export type Suffixes = Array<string>

export interface ScramblerSetup {
  length: {
    min: number;
    maxAdd: number;
  };
  moveGroups: MoveGroups;
  suffixes: Suffixes;
  startGroupIndex?: number;
}

export enum Repeat {
  NORMAL = 0,
  MEGAMINX = 6
}