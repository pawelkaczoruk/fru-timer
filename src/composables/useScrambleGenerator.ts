import useMath from './useMath'
import useConfig from './store/useConfig'
import useCurrentData from './store/useCurrentData'

import { ScramblesConfig } from '@/types/Scramble'

const NxN = {
  suffixes: ['', '2', '\''],
  moveGroups: [
    ['U', 'D'],
    ['F', 'B'],
    ['R', 'L']
  ]
}

const CONFIG: ScramblesConfig = {
  c2x2: {
    length: { min: 9, maxAdd: 2 },
    moveGroups: NxN.moveGroups,
    suffixes: NxN.suffixes
  },
  c3x3: {
    length: { min: 19, maxAdd: 5 },
    suffixes: NxN.suffixes,
    moveGroups: NxN.moveGroups
  },
}

export default function useScrambleGenerator() {
  const { random } = useMath()
  const { getSelectedCubeType } = useConfig()
  const { setCurrentScramble } = useCurrentData()

  const generateScramble = () => {
    const config = CONFIG[getSelectedCubeType.value]
    const length = random(config.length.min, config.length.maxAdd + 1)
    const scramble = []
    let lastGroupIndex = random(0, config.moveGroups.length)

    for (let i = 0; i < length; i++) {
      const suffix = config.suffixes[random(0, config.suffixes.length)]
      let groupIndex: number

      do groupIndex = random(0, config.moveGroups.length)
      while (groupIndex === lastGroupIndex)

      const group = config.moveGroups[groupIndex]
      const letter = group[random(0, group.length)]

      lastGroupIndex = groupIndex
      scramble.push(letter + suffix)
    }

    setCurrentScramble(scramble.join(' '))
  }

  return {
    generateScramble
  }
}