import { ScramblerConfig, Repeat, MoveGroups, Suffixes } from "@/types/Scramble"

interface Conf<T> {
  [key: string]: T;
}

const SUFFIXES: Conf<Suffixes> = {
  NXN: ['', '2', '\''],
  SIMPLE: ['', '\''],
  MINX: ['++', '--']
}

const MOVE_GROUPS: Conf<MoveGroups> = {
  NXN_SMALL: [
    ['U', 'D'],
    ['F', 'B'],
    ['R', 'L']
  ],
  NXN_MEDIUM: [
    ['Uw', 'Dw'],
    ['Fw', 'Bw'],
    ['Rw', 'Lw']
  ],
  NXN_BIG: [
    ['3Uw', '3Dw'],
    ['3Fw', '3Bw'],
    ['3Rw', '3Lw']
  ],
  ROTATION: [
    ['x'],
    ['y'],
    ['z']
  ],
  SIMPLE: [
    ['U'],
    ['B'],
    ['R'],
    ['L']
  ],
  L: [['l']],
  R: [['r']],
  B: [['b']],
  U: [['u']],
  MINX: [
    ['R'],
    ['D']
  ],
  MINX_ROT: [['U']]
}

const CONFIG: Conf<ScramblerConfig> = {
  c2x2: {
    repeat: Repeat.NORMAL,
    setup: [
      {
        length: { min: 9, maxAdd: 2 },
        suffixes: SUFFIXES.NXN,
        moveGroups: MOVE_GROUPS.NXN_SMALL
      },
    ]
  },
  c3x3: {
    repeat: Repeat.NORMAL,
    setup: [
      {
        length: { min: 19, maxAdd: 5 },
        suffixes: SUFFIXES.NXN,
        moveGroups: MOVE_GROUPS.NXN_SMALL
      },
    ]
  },
  c3x3oh: {
    repeat: Repeat.NORMAL,
    setup: [
      {
        length: { min: 19, maxAdd: 5 },
        suffixes: SUFFIXES.NXN,
        moveGroups: MOVE_GROUPS.NXN_SMALL
      },
    ]
  },
  c3x3fm: {
    repeat: Repeat.NORMAL,
    setup: [
      {
        length: { min: 24, maxAdd: 6 },
        suffixes: SUFFIXES.NXN,
        moveGroups: MOVE_GROUPS.NXN_SMALL
      },
    ]
  },
  c3x3bld: {
    repeat: Repeat.NORMAL,
    setup: [
      {
        length: { min: 20, maxAdd: 3 },
        suffixes: SUFFIXES.NXN,
        moveGroups: MOVE_GROUPS.NXN_SMALL
      },
      {
        length: { min: 0, maxAdd: 2 },
        suffixes: SUFFIXES.NXN,
        moveGroups: MOVE_GROUPS.NXN_MEDIUM
      }
    ]
  },
  c3x3mbld: {
    repeat: Repeat.NORMAL,
    setup: [
      {
        length: { min: 20, maxAdd: 3 },
        suffixes: SUFFIXES.NXN,
        moveGroups: MOVE_GROUPS.NXN_SMALL
      },
      {
        length: { min: 0, maxAdd: 2 },
        suffixes: SUFFIXES.NXN,
        moveGroups: MOVE_GROUPS.NXN_MEDIUM
      }
    ]
  },
  c4x4: {
    repeat: Repeat.NORMAL,
    setup: [
      {
        length: { min: 19, maxAdd: 3 },
        suffixes: SUFFIXES.NXN,
        moveGroups: MOVE_GROUPS.NXN_SMALL
      },
      {
        length: { min: 25, maxAdd: 0 },
        suffixes: SUFFIXES.NXN,
        moveGroups: MOVE_GROUPS.NXN_SMALL.map((group, index) => [...group, ...MOVE_GROUPS.NXN_MEDIUM[index]])
      }
    ]
  },
  c4x4bld: {
    repeat: Repeat.NORMAL,
    setup: [
      {
        length: { min: 19, maxAdd: 3 },
        suffixes: SUFFIXES.NXN,
        moveGroups: MOVE_GROUPS.NXN_SMALL
      },
      {
        length: { min: 25, maxAdd: 0 },
        suffixes: SUFFIXES.NXN,
        moveGroups: MOVE_GROUPS.NXN_SMALL.map((group, index) => [...group, ...MOVE_GROUPS.NXN_MEDIUM[index]])
      },
      {
        length: { min: 0, maxAdd: 2 },
        suffixes: SUFFIXES.NXN,
        moveGroups: MOVE_GROUPS.ROTATION
      }
    ]
  },
  c5x5: {
    repeat: Repeat.NORMAL,
    setup: [
      {
        length: { min: 60, maxAdd: 0 },
        suffixes: SUFFIXES.NXN,
        moveGroups: [...MOVE_GROUPS.NXN_SMALL, ...MOVE_GROUPS.NXN_MEDIUM]
      }
    ]
  },
  c5x5bld: {
    repeat: Repeat.NORMAL,
    setup: [
      {
        length: { min: 60, maxAdd: 0 },
        suffixes: SUFFIXES.NXN,
        moveGroups: [...MOVE_GROUPS.NXN_SMALL, ...MOVE_GROUPS.NXN_MEDIUM]
      },
      {
        length: { min: 0, maxAdd: 2 },
        suffixes: SUFFIXES.NXN,
        moveGroups: MOVE_GROUPS.NXN_BIG
      }
    ]
  },
  c6x6: {
    repeat: Repeat.NORMAL,
    setup: [
      {
        length: { min: 80, maxAdd: 0 },
        suffixes: SUFFIXES.NXN,
        moveGroups: [...MOVE_GROUPS.NXN_SMALL, ...MOVE_GROUPS.NXN_MEDIUM, ...MOVE_GROUPS.NXN_BIG]
      }
    ]
  },
  c7x7: {
    repeat: Repeat.NORMAL,
    setup: [
      {
        length: { min: 100, maxAdd: 0 },
        suffixes: SUFFIXES.NXN,
        moveGroups: [...MOVE_GROUPS.NXN_SMALL, ...MOVE_GROUPS.NXN_MEDIUM, ...MOVE_GROUPS.NXN_BIG]
      }
    ]
  },
  pyraminx: {
    repeat: Repeat.NORMAL,
    setup: [
      {
        length: { min: 10, maxAdd: 0 },
        suffixes: SUFFIXES.SIMPLE,
        moveGroups: MOVE_GROUPS.SIMPLE
      },
      {
        length: { min: 0, maxAdd: 1 },
        suffixes: SUFFIXES.SIMPLE,
        moveGroups: MOVE_GROUPS.L
      },
      {
        length: { min: 0, maxAdd: 1 },
        suffixes: SUFFIXES.SIMPLE,
        moveGroups: MOVE_GROUPS.R
      },
      {
        length: { min: 0, maxAdd: 1 },
        suffixes: SUFFIXES.SIMPLE,
        moveGroups: MOVE_GROUPS.B
      },
      {
        length: { min: 0, maxAdd: 1 },
        suffixes: SUFFIXES.SIMPLE,
        moveGroups: MOVE_GROUPS.U
      }
    ]
  },
  megaminx: {
    repeat: Repeat.MEGAMINX,
    setup: [
      {
        length: { min: 10, maxAdd: 0 },
        suffixes: SUFFIXES.MINX,
        moveGroups: MOVE_GROUPS.MINX,
        startGroupIndex: 0
      },
      {
        length: { min: 1, maxAdd: 0 },
        suffixes: SUFFIXES.SIMPLE,
        moveGroups: MOVE_GROUPS.MINX_ROT
      }
    ]
  },
  skweb: {
    repeat: Repeat.NORMAL,
    setup: [
      {
        length: { min: 10, maxAdd: 0 },
        suffixes: SUFFIXES.SIMPLE,
        moveGroups: MOVE_GROUPS.SIMPLE
      }
    ]
  }
}

export default CONFIG