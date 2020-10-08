import { ResultState } from '@/types/Timer'

const DNF = 'dnf'
const NO_VALID_TIME = '-'

export default function useTimeFormatter() {
  const getFormattedTime = (time: number, penalty = ResultState.NO_PENALTY) => { 
    if (penalty === ResultState.DNF || time === ResultState.DNF) return DNF
    if (time === ResultState.NOT_ENOUGH_TIMES) return NO_VALID_TIME

    const total = time + penalty
    const min = Math.floor(total / 60 / 1000)
    const s = Math.floor((total - min * 60 * 1000) / 1000)
    const ms = Math.floor((total % 1000) / 10)

    const minFormat = min < 1 ? '' : `${min}:`
    const sFormat = (min > 0 && s < 10) ? `0${s}.` : `${s}.`
    const msFormat = ms < 10 ? `0${ms}` : `${ms}`
    const penaltyFormat = penalty === ResultState.PLUS_TWO ? '+' : ''

    return minFormat + sFormat + msFormat + penaltyFormat
  }

  return { getFormattedTime }
}