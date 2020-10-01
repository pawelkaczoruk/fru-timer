import { Result, AverageType } from '@/types/Timer'


const DNF = -1
const NOT_ENOUGH_TIMES = -2

export default function useMath() {
  const random = (minimum: number, range: number) => {
    return minimum + Math.floor(Math.random() * range)
  }

  const getAverage = (type: AverageType, results: Array<Result>, startIndex?: number, amount?: number) => {
    if (startIndex !== undefined && amount !== undefined) {
      results = results.slice(startIndex, startIndex + amount)
      if (amount !== results.length) return NOT_ENOUGH_TIMES
    }

    const penalties = results.map((result) => result.time.penalty)
    const dnfIndex = penalties.indexOf(DNF)
    if ( dnfIndex !== penalties.lastIndexOf(DNF)) return DNF

    const times = results.map((result) => result.time.value + result.time.penalty)
    const sum = [...times, ...penalties].reduce((sum, value) => sum + value, 0)

    if (type === 'avg') {
      const maxIndex = dnfIndex === -1 ? times.indexOf(Math.max(...times)) : dnfIndex
      const max = times[maxIndex]
      const min = Math.min(...times)
      const minIndex = times.indexOf(min)

      return (sum - (max + penalties[maxIndex] + min + penalties[minIndex])) / (times.length - 2)
    }

    if (dnfIndex !== -1) return DNF
    return sum / times.length
  }

  const getAo5 = (results: Array<Result>, startIndex: number) => getAverage('avg', results, startIndex, 5)
  const getAo12 = (results: Array<Result>, startIndex: number) => getAverage('avg', results, startIndex, 12)
  const getMo3 = (results: Array<Result>, startIndex: number) => getAverage('mean', results, startIndex, 3)
  const getSessionMean = (results: Array<Result>) => getAverage('mean', results)

  return {
    random,

    getAo5,
    getAo12,
    getMo3,
    getSessionMean,
  }
}