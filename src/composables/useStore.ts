import { reactive, computed } from 'vue'

const state = reactive({
  currentTime: 0
})

export default function useStore() {
  const getCurrentTime = computed(() => state.currentTime)
  const setCurrentTime = (time) => { state.currentTime = time }

  return {
    getCurrentTime,
    setCurrentTime
  }
}
