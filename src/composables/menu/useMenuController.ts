import { computed, ref } from 'vue'
import useConfig from '../store/useConfig'
import useSessionResults from '../store/useSessionResults'
import useLocalStorage from '../useLocalStorage'


const isDisplayMenuVisible = ref(false)
const isOptionMenuVisible = ref(false)
const isSessionMenuVisible = ref(false)
const isCommentModalVisible = ref(false)
const isSessionModalVisible = ref(false)


export default function useMenuController() {
  const { getSessionLength } = useSessionResults()
  const { setConfig: setConfigLS } = useLocalStorage()
  const {
    toggleStatsVisibility,
    toggleScrambleVisibility,
    toggleListVisibility,
    getConfig
  } = useConfig()

  const getDisplayMenuVisibility = computed(() => isDisplayMenuVisible.value)
  const getOptionMenuVisibility = computed(() => isOptionMenuVisible.value)
  const getSessionMenuVisibility = computed(() => isSessionMenuVisible.value)
  const getCommentModalVisibility = computed(() => isCommentModalVisible.value)
  const getSessionModalVisibility = computed(() => isSessionModalVisible.value)

  const toggleDisplayMenu = (state?: boolean) => {
    isDisplayMenuVisible.value = state === undefined ? !isDisplayMenuVisible.value : state
    isOptionMenuVisible.value = false
    isSessionMenuVisible.value = false
  } 

  const toggleOptionMenu = (state?: boolean) => {
    isOptionMenuVisible.value = state === undefined ? !isOptionMenuVisible.value : state
    isSessionMenuVisible.value = false
    isDisplayMenuVisible.value = false
  }

  const toggleSessionMenu = (state?: boolean) => {
    isSessionMenuVisible.value = state === undefined ? !isSessionMenuVisible.value : state
    isOptionMenuVisible.value = false
    isDisplayMenuVisible.value = false
  }

  const toggleStatsDisplay = () => {
    toggleStatsVisibility()
    setConfigLS(getConfig.value)
  }

  const toggleScrambleDisplay = () => {
    toggleScrambleVisibility()
    setConfigLS(getConfig.value)
  }

  const toggleTimesList = () => {
    toggleListVisibility()
    setConfigLS(getConfig.value)
  }

  const toggleCommentModal = () => {
    if (!getSessionLength.value) return
    isCommentModalVisible.value = !isCommentModalVisible.value
  }

  const toggleSessionModal = () => {
    isSessionModalVisible.value = !isSessionModalVisible.value
  }

  return {
    getDisplayMenuVisibility,
    getOptionMenuVisibility,
    getSessionMenuVisibility,
    getCommentModalVisibility,
    getSessionModalVisibility,
    toggleDisplayMenu,
    toggleOptionMenu,
    toggleSessionMenu,
    toggleStatsDisplay,
    toggleScrambleDisplay,
    toggleTimesList,
    toggleCommentModal,
    toggleSessionModal
  }
}