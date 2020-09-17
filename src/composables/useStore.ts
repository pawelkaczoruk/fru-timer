import { reactive, computed } from 'vue'

interface State {
  currentTime: number;
}

const state: State = reactive({
  currentTime: 0
})

export default function useStore() {
  const getCurrentTime = computed(() => state.currentTime)
  const setCurrentTime = (time: number) => { state.currentTime = time }

  return {
    getCurrentTime,
    setCurrentTime
  }
}
