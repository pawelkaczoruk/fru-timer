import { Results, AverageType, ResultState, Values } from '@/types/Timer'


export default function useMath() {
  const random = (minimum: number, range: number) => minimum + Math.floor(Math.random() * range)
  const cutOffMillis = (value: number) => Math.floor(value / 10) * 10

  const getAverage = (type: AverageType, results: Results, startIndex?: number, amount?: number) => {
    if (!results.length) return ResultState.NOT_ENOUGH_TIMES
    if (startIndex !== undefined && amount !== undefined) {
      results = results.slice(startIndex, startIndex + amount)
      if (amount !== results.length) return ResultState.NOT_ENOUGH_TIMES
    }

    const penalties = results.map(({ time }) => time.penalty)
    const dnfIndex = penalties.indexOf(ResultState.DNF)
    if ( dnfIndex !== penalties.lastIndexOf(ResultState.DNF)) return ResultState.DNF

    const times = results.map(({ time }) => time.value + time.penalty)
    const sum = [...times].reduce((sum, value) => sum + value, 0)

    if (type === 'avg') {
      const max = times[dnfIndex === -1 ? times.indexOf(Math.max(...times)) : dnfIndex]
      const min = Math.min(...times)

      return cutOffMillis((sum - (max + min)) / (times.length - 2))
    }

    if (dnfIndex !== -1) return ResultState.DNF
    return cutOffMillis(sum / times.length)
  }

  const isBetter = (value: number, best: number) => {
    return value >= ResultState.DNF && best === ResultState.NOT_ENOUGH_TIMES
      || best === ResultState.DNF && value > 0
      || value > 0 && value < best
  }

  const findBest = (values: Values) => {
    if (!values.length) return ResultState.NOT_ENOUGH_TIMES

    let best = ResultState.NOT_ENOUGH_TIMES
    values.forEach((value) => {
      if(isBetter(value, best)) best = value
    })

    return best
  }

  return {
    random,
    cutOffMillis,
    getAverage,
    isBetter,
    findBest
  }
}