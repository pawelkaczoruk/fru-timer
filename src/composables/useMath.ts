import { Result, AverageType } from '@/types/Timer'


const DNF = -1
const NOT_ENOUGH_TIMES = -2

export default function useMath() {
  const random = (minimum: number, range: number) => minimum + Math.floor(Math.random() * range)
  const cutOffMillis = (value: number) => Math.floor(value / 10) * 10

  const getAverage = (type: AverageType, results: Array<Result>, startIndex?: number, amount?: number) => {
    if (!results.length) return NOT_ENOUGH_TIMES
    if (startIndex !== undefined && amount !== undefined) {
      results = results.slice(startIndex, startIndex + amount)
      if (amount !== results.length) return NOT_ENOUGH_TIMES
    }

    const penalties = results.map((result) => result.time.penalty)
    const dnfIndex = penalties.indexOf(DNF)
    if ( dnfIndex !== penalties.lastIndexOf(DNF)) return DNF

    const times = results.map((result) => result.time.value + result.time.penalty)
    const sum = [...times].reduce((sum, value) => sum + value, 0)

    if (type === 'avg') {
      const max = times[dnfIndex === -1 ? times.indexOf(Math.max(...times)) : dnfIndex]
      const min = Math.min(...times)

      return cutOffMillis((sum - (max + min)) / (times.length - 2))
    }

    if (dnfIndex !== -1) return DNF
    return cutOffMillis(sum / times.length)
  }

  const isBetter = (value: number, best: number) => {
    return value >= DNF && best === NOT_ENOUGH_TIMES
      || best === DNF && value > 0
      || value > 0 && value < best
  }

  return {
    random,
    cutOffMillis,
    getAverage,
    isBetter
  }
}