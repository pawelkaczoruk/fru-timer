import { reactive, computed } from 'vue'
import useStore from './useStore'

const TIMER_DELAY = 550
const KEY_CODE = 'Space'

interface Timer {
  state: number;
  interval: number | undefined;
  timeout: number | undefined;
  initialDate: number;
  latestDate: number;

  canStart: boolean;
  isIdle: boolean;
  isRunning: boolean;
  isTimeAdded: boolean;
}

export default function useTimer() {
  const timer: Timer = reactive({
    state: 0,
    interval: undefined,
    timeout: undefined,
    initialDate: Date.now(),
    latestDate: Date.now(),

    canStart: true,
    isIdle: true,
    isRunning: false,
    isTimeAdded: true
  })

  const { setCurrentTime } = useStore()

  const startTimer = () => {
    const initialDate = Date.now()

    timer.interval = setInterval(() => {
      setCurrentTime(Date.now() - initialDate)
    }, 10);
  }

  const onPress = (e: KeyboardEvent) => {
    if (e.code === KEY_CODE || e.code === undefined) {
      if (timer.isRunning) {
        clearInterval(timer.interval)

        if (!timer.isTimeAdded) {
          // add times to store here
          timer.isTimeAdded = true
        }
      }

      if (timer.canStart && timer.isIdle) {
        timer.initialDate = timer.latestDate = Date.now()
        timer.isIdle = false
        timer.state = -1

        timer.timeout = setTimeout(() => {
          timer.latestDate = Date.now()
          timer.state = 1
        }, 550)
      }
    }
  }

  const onRelease = (e: KeyboardEvent) => {
    if (e.code === KEY_CODE || e.code === undefined) {
      clearTimeout(timer.timeout)

      if (timer.canStart) {
        timer.state = 0
        timer.isIdle = true

        if (timer.latestDate - timer.initialDate >= TIMER_DELAY) {
          timer.isRunning = true
          timer.canStart = false
          timer.isTimeAdded = false
          startTimer()
        }
      } else {
        timer.canStart = true
      }
    }
  }

  const getState = computed(() => timer.state)

  return {
    getState,
    onPress,
    onRelease
  }
}
