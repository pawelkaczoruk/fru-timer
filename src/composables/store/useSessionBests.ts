import { computed } from 'vue'

import useMath from '../useMath'
import useSessionResults from './useSessionResults'
import useState from './useState'

import { Time, ResultState } from '@/types/Timer'

export default function useSessionBests() {
  const { state } = useState()

  const getBestSingle = computed(() => state.sessionBests.single)
  const setBestSingle = (value: number) => { state.sessionBests.single = value }

  const getBestMo3 = computed(() => state.sessionBests.mo3)
  const setBestMo3 = (value: number) => { state.sessionBests.mo3 = value }

  const getBestAo5 = computed(() => state.sessionBests.ao5)
  const setBestAo5 = (value: number) => { state.sessionBests.ao5 = value }

  const getBestAo12 = computed(() => state.sessionBests.ao12)
  const setBestAo12 = (value: number) => { state.sessionBests.ao12 = value }

  const { getAo5, getAo12, getMo3 } = useSessionResults()
  const { isBetter } = useMath()
  const updateBests = (time: Time, index: number) => {
    const single = time.penalty === ResultState.DNF ? ResultState.DNF : time.penalty + time.value
    const mo3 = getMo3(index - 2)
    const ao5 = getAo5(index - 4)
    const ao12 = getAo12(index - 11)
  
    if (isBetter(single, getBestSingle.value)) setBestSingle(single)
    if (isBetter(mo3, getBestMo3.value)) setBestMo3(mo3)
    if (isBetter(ao5, getBestAo5.value)) setBestAo5(ao5)
    if (isBetter(ao12, getBestAo12.value)) setBestAo12(ao12)
  
    return { single, mo3, ao5, ao12 }
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

    updateBests
  }
}