import { reactive, computed } from 'vue'
import useConfig from './store/useConfig'
import useCurrentData from './store/useCurrentData'
import useDB from './useDB'
import useScrambleGenerator from './scrambler/useScrambleGenerator'
import useSessionBests from './store/useSessionBests'
import useSessionHistory from './store/useSessionHistory'
import useSessionResults from './store/useSessionResults'
import { Timer, isKeyboardEvent, Result, TimerState, ResultState } from '@/types/Timer'


const TIMER_DELAY = 550
const KEY_CODE = 'Space'

const timer: Timer = reactive({
  state: TimerState.IDLE,
  interval: undefined,
  timeout: undefined,
  initialDate: Date.now(),
  latestDate: Date.now(),

  canStart: true,
  isIdle: true,
  isRunning: false,
  isTimeAdded: true
})


export default function useTimer() {
  const { addResult: addResultDB } = useDB()
  const { setCurrentTime, getCurrentTime, getCurrentScramble } = useCurrentData()
  const { getSessionLength, addSessionResult } = useSessionResults()
  const { updateBests } = useSessionBests()
  const { getCurrentSessionKey } = useConfig()
  const { addToSessionHistory } = useSessionHistory()
  const { generateScramble } = useScrambleGenerator()

  const checkTargetConditions = (e: KeyboardEvent | TouchEvent) => {
    const classList  = (e.target as Element).classList
    return (classList.contains('targetable') || isKeyboardEvent(e)) && !classList.contains('not-targetable')
  }

  const startTimer = () => {
    const initialDate = Date.now()

    timer.interval = setInterval(() => {
      setCurrentTime(Date.now() - initialDate)
    }, 10);
  }

  const onPress = (e: KeyboardEvent | TouchEvent) => {
    if (isKeyboardEvent(e) && e.code === KEY_CODE || !isKeyboardEvent(e)) {
      if (!checkTargetConditions(e)) return
      if (timer.isRunning) {
        clearInterval(timer.interval)

        if (!timer.isTimeAdded) {
          const result: Result = {
            comment: '',
            date: Date.now(),
            scramble: getCurrentScramble.value,
            time: {
              penalty: ResultState.NO_PENALTY,
              value: getCurrentTime.value
            }            
          }

          addResultDB(getCurrentSessionKey.value, result)
          addSessionResult(result)
          generateScramble()
          addToSessionHistory(updateBests(result.time, getSessionLength.value - 1))

          timer.isTimeAdded = true
        }
      }

      if (timer.canStart && timer.isIdle) {
        timer.initialDate = timer.latestDate = Date.now()
        timer.isIdle = false
        timer.state = TimerState.NOT_READY

        timer.timeout = setTimeout(() => {
          timer.latestDate = Date.now()
          timer.state = TimerState.READY
        }, 550)
      }
    }
  }

  const onRelease = (e: KeyboardEvent | TouchEvent) => {
    if (isKeyboardEvent(e) && e.code === KEY_CODE || !isKeyboardEvent(e)) {
      if (!checkTargetConditions(e)) return

      clearTimeout(timer.timeout)

      if (timer.canStart) {
        timer.state = TimerState.IDLE
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
