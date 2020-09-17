export default function useTimeFormatter() {
  const getFormattedTime = (time, penalty = 0) => {
    let total, min, s, ms, minFormat, sFormat, msFormat, penaltyFormat

    if (penalty === -1) return 'dnf'

    total = time + penalty
    min = Math.floor(total / 60 / 1000)
    s = Math.floor((total - min * 60 * 1000) / 1000)
    ms = Math.floor((total % 1000) / 10)

    minFormat = min < 1 ? '' : `${min}:`
    sFormat = (min > 0 && s < 10) ? `0${s}.` : `${s}.`
    msFormat = ms < 10 ? `0${ms}` : `${ms}`
    penaltyFormat = penalty === 2000 ? '+' : ''

    return minFormat + sFormat + msFormat + penaltyFormat
  }

  return { getFormattedTime }
}