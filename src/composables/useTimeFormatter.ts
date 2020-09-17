export default function useTimeFormatter() {
  const getFormattedTime = (time: number, penalty = 0) => { 
    if (penalty === -1) return 'dnf'

    const total = time + penalty
    const min = Math.floor(total / 60 / 1000)
    const s = Math.floor((total - min * 60 * 1000) / 1000)
    const ms = Math.floor((total % 1000) / 10)

    const minFormat = min < 1 ? '' : `${min}:`
    const sFormat = (min > 0 && s < 10) ? `0${s}.` : `${s}.`
    const msFormat = ms < 10 ? `0${ms}` : `${ms}`
    const penaltyFormat = penalty === 2000 ? '+' : ''

    return minFormat + sFormat + msFormat + penaltyFormat
  }

  return { getFormattedTime }
}