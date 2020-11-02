import CONFIG from './config'
import useMath from '../useMath'
import useConfig from '../store/useConfig'
import useCurrentData from '../store/useCurrentData'
import { ScramblerSetup } from '@/types/Scramble'


export default function useScrambleGenerator() {
  const { random } = useMath()
  const { getSelectedCubeType } = useConfig()
  const { setCurrentScramble } = useCurrentData()

  const generaterator = (config: ScramblerSetup) => {
    const length = random(config.length.min, config.length.maxAdd + 1)
    const scramble: Array<string> = []
    let lastGroupIndex = -1

    for (let i = 0; i < length; i++) {
      const suffix = config.suffixes[random(0, config.suffixes.length)]
      let groupIndex: number

      if (i === 0 && config.startGroupIndex !== undefined) {
        groupIndex = config.startGroupIndex
      } else {
        do groupIndex = random(0, config.moveGroups.length)
        while (groupIndex === lastGroupIndex);
      }

      const group = config.moveGroups[groupIndex]
      const letter = group[random(0, group.length)]

      lastGroupIndex = groupIndex
      scramble.push(letter + suffix)
    }

    return scramble.join(' ')
  }

  const generateScramble = () => {
    const cube = getSelectedCubeType.value
    if (cube === 'square1' || cube === 'clock') {
      setCurrentScramble(`${cube} is not yet supported by the scramble generator`)
      return
    }

    const config = CONFIG[cube]
    const parts: Array<string> = []

    for (let i = 0; i <= config.repeat; i++) {
      config.setup.forEach((setup) => {
        parts.push(generaterator(setup))
      })
    }

    setCurrentScramble(parts.join(' '))
  }

  return {
    generateScramble
  }
}