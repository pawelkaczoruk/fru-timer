import { Result, AverageType } from '@/types/Timer'


const DNF = -1
const NOT_ENOUGH_TIMES = -2

export default function useMath() {
  const random = (minimum: number, range: number) => {
    return minimum + Math.floor(Math.random() * range)
  }

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

      return (sum - (max + min)) / (times.length - 2)
    }

    if (dnfIndex !== -1) return DNF
    return sum / times.length
  }

  return {
    random,
    getAverage
  }
}