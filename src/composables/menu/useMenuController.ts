import { computed, ref } from 'vue'
import useConfig from '../store/useConfig'
import useSessionResults from '../store/useSessionResults'
import useLocalStorage from '../useLocalStorage'


const isOptionMenuVisible = ref(false)
const isSessionMenuVisible = ref(false)
const isCommentModalVisible = ref(false)


export default function useMenuController() {
  const { getSessionLength } = useSessionResults()
  const { toggleStatsVisibility, getConfig } = useConfig()
  const { setConfig: setConfigLS } = useLocalStorage()

  const getOptionMenuVisibility = computed(() => isOptionMenuVisible.value)
  const getSessionMenuVisibility = computed(() => isSessionMenuVisible.value)
  const getCommentModalVisibility = computed(() => isCommentModalVisible.value)

  const toggleOptionMenu = (state?: boolean) => {
    isOptionMenuVisible.value = state === undefined ? !isOptionMenuVisible.value : state
    isSessionMenuVisible.value = false
  }

  const toggleSessionMenu = () => {
    if (isOptionMenuVisible.value) toggleOptionMenu(false)
    isSessionMenuVisible.value = !isSessionMenuVisible.value
  }

  const toggleStatsDisplay = () => {
    toggleStatsVisibility()
    setConfigLS(getConfig.value)
  }

  const toggleCommentModal = () => {
    toggleOptionMenu(false)
    if (!getSessionLength.value) return
    isCommentModalVisible.value = !isCommentModalVisible.value
  }

  return {
    getOptionMenuVisibility,
    getSessionMenuVisibility,
    getCommentModalVisibility,
    toggleOptionMenu,
    toggleSessionMenu,
    toggleStatsDisplay,
    toggleCommentModal
  }
}