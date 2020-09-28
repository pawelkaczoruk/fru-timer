export interface ScramblesConfig {
  [key: string]: ScrambleConfig;
  c2x2: ScrambleConfig;
  c3x3: ScrambleConfig;
}

export interface ScrambleConfig {
  length: {
    min: number;
    maxAdd: number;
  };
  moveGroups: Array<Array<string>>;
  suffixes: Array<string>;
}