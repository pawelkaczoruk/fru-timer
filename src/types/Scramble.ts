export interface ScramblesConfig {
  [key: string]: ScrambleConfig;
  c2x2: ScrambleConfig;
  c3x3: ScrambleConfig;
}

export type MoveGroups = Array<Array<string>>
export type Suffixes = Array<string>
export interface ScrambleConfig {
  length: {
    min: number;
    maxAdd: number;
  };
  moveGroups: MoveGroups;
  suffixes: Suffixes;
}