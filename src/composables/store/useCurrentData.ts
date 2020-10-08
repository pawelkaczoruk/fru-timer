import { computed } from 'vue'

import useMath from '../useMath'
import useState from './useState'

export default function useCurrentData() {
  const { state } = useState()

  const { cutOffMillis } = useMath()
  const getCurrentTime = computed(() => cutOffMillis(state.currentTime))
  const setCurrentTime = (time: number) => { state.currentTime = time }
  
  const getCurrentScramble = computed(() => state.currentScramble)
  const setCurrentScramble = (scramble: string) => { state.currentScramble = scramble }

  return {
    getCurrentTime,
    setCurrentTime,

    getCurrentScramble,
    setCurrentScramble
  }
}