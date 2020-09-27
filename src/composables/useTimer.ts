import { reactive, computed } from 'vue'
import useStore from './useStore'
import useDB from './useDB'
import { Timer, isKeyboardEvent, Result } from '@/types/Timer'


export default function useTimer() {
  const TIMER_DELAY = 550
  const KEY_CODE = 'Space'

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

  const { updateSession } = useDB()
  const { getCurrentTime, getCurrentScramble, getCurrentSessionKey, getCurrentSessionLength } = useStore()
  const onPress = (e: KeyboardEvent | TouchEvent) => {
    if (isKeyboardEvent(e) && e.code === KEY_CODE || !isKeyboardEvent(e)) {
      if (timer.isRunning) {
        clearInterval(timer.interval)

        if (!timer.isTimeAdded) {
          const result: Result = {
            comment: '',
            date: Date.now(),
            scramble: getCurrentScramble.value,
            time: {
              penalty: 0,
              value: getCurrentTime.value
            }            
          }
          updateSession(getCurrentSessionKey.value, getCurrentSessionLength.value, result)
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

  const onRelease = (e: KeyboardEvent | TouchEvent) => {
    if (isKeyboardEvent(e) && e.code === KEY_CODE || !isKeyboardEvent(e)) {
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
