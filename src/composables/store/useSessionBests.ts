import { computed, reactive } from 'vue'
import useMath from '../useMath'
import useSessionResults from './useSessionResults'
import { Time, ResultState } from '@/types/Timer'
import { SessionStats } from '@/types/Store'


const sessionBests: SessionStats = reactive({
  single: ResultState.NOT_ENOUGH_TIMES,
  mo3: ResultState.NOT_ENOUGH_TIMES,
  ao5: ResultState.NOT_ENOUGH_TIMES,
  ao12: ResultState.NOT_ENOUGH_TIMES,
})


export default function useSessionBests() {
  const getBestSingle = computed(() => sessionBests.single)
  const setBestSingle = (value: number) => { sessionBests.single = value }

  const getBestMo3 = computed(() => sessionBests.mo3)
  const setBestMo3 = (value: number) => { sessionBests.mo3 = value }

  const getBestAo5 = computed(() => sessionBests.ao5)
  const setBestAo5 = (value: number) => { sessionBests.ao5 = value }

  const getBestAo12 = computed(() => sessionBests.ao12)
  const setBestAo12 = (value: number) => { sessionBests.ao12 = value }

  const { getAo5, getAo12, getMo3 } = useSessionResults()
  const { isBetter } = useMath()
  const updateBests = ({ penalty, value }: Time, index: number) => {
    const single = penalty === ResultState.DNF ? ResultState.DNF : penalty + value
    const mo3 = getMo3(index - 2)
    const ao5 = getAo5(index - 4)
    const ao12 = getAo12(index - 11)
  
    if (isBetter(single, getBestSingle.value)) setBestSingle(single)
    if (isBetter(mo3, getBestMo3.value)) setBestMo3(mo3)
    if (isBetter(ao5, getBestAo5.value)) setBestAo5(ao5)
    if (isBetter(ao12, getBestAo12.value)) setBestAo12(ao12)
  
    return { single, mo3, ao5, ao12 }
  }
  const resetBests = () => {
    setBestSingle(ResultState.NOT_ENOUGH_TIMES)
    setBestMo3(ResultState.NOT_ENOUGH_TIMES)
    setBestAo5(ResultState.NOT_ENOUGH_TIMES)
    setBestAo12(ResultState.NOT_ENOUGH_TIMES)
  }

  return {
    getBestSingle,
    setBestSingle,

    getBestMo3,
    setBestMo3,

    getBestAo5,
    setBestAo5,

    getBestAo12,
    setBestAo12,

    updateBests,
    resetBests
  }
}