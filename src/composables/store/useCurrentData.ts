import { computed, Ref, ref } from 'vue'
import useMath from '../useMath'


const currentTime: Ref<number> = ref(0)
const currentScramble: Ref<string> = ref('')


export default function useCurrentData() {
  const { cutOffMillis } = useMath()
  const getCurrentTime = computed(() => cutOffMillis(currentTime.value))
  const setCurrentTime = (time: number) => { currentTime.value = time }
  
  const getCurrentScramble = computed(() => currentScramble.value)
  const setCurrentScramble = (scramble: string) => { currentScramble.value = scramble }

  const resetTime = () => currentTime.value = 0;

  return {
    getCurrentTime,
    setCurrentTime,

    getCurrentScramble,
    setCurrentScramble,

    resetTime
  }
}